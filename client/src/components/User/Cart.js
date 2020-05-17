import React, { Component } from 'react';
import UserLayout from '../../hoc/User';
import UserProductBlock from  '../utils/User/UserProductBlock';

import { connect } from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../actions/user_actions';

import { FaFrown, FaSmile } from 'react-icons/fa';

import Paypal from '../utils/Paypal';

///ATEYWlv0NInsw7Rmo8SL8iAtcqfYEi1FQj223aiwu8_JS2wCe4cTPDBfy9WHTjQZs0lBQFF8DYMh_cMV

class Cart extends Component {

    state = {
        loading: true,
        total: 0,
        showTotal: false,
        showSuccess: false
    }

    componentDidMount(){
        let cartItems = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0) {
                user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });

                this.props.dispatch(getCartItems(cartItems, user.userData.cart))
                .then(() => {
                    if(this.props.user.cartDetails.length > 0) {
                        this.calculateTotal(this.props.user.cartDetails);
                    }
                })
            }
        }
    }

    calculateTotal = (cartDetails) => {
        let total = 0;

        cartDetails.forEach(item => {
            total += Number(item.price, 10) * item.quantity
        });

        this.setState({
            total,
            showTotal: true
        })
    }

    removeFromCart = (id) => {
        this.props.dispatch(removeCartItem(id))
        .then(() => {
            if(this.props.user.cartDetails.length <= 0) {
                this.setState({
                    showTotal: false
                })
            } else {
                this.calculateTotal(this.props.user.cartDetails)
            }
        })
    }

    showNoItemMessage = () => (
        <div className='cart_no_items'>
            <FaFrown />
            <div>
                You have no items
            </div>
        </div>
    )

    transactionError = (data) => {
        console.log('Paypal Error');
    }

    transactionCanceled = () => {
        console.log('Transaction calcel');
    }

    transactionSuccess = (data) => {
        this.props.dispatch(onSuccessBuy({
            cartDetails: this.props.user.cartDetails,
            paymentData: data
        }))/*.then(() => {
            if(this.props.user.successBuy) {
                this.setState({
                    showTotal: false,
                    showSuccess: true
                })
            }
        })*/
        this.setState({
            showTotal: false,
            showSuccess: true
        })
    }

    render() {
        return (
            <UserLayout>
                 <div>
                    <h1>My Cart</h1>
                    <div className='user_cart'>
                        <UserProductBlock 
                            products={this.props.user}
                            type='cart'
                            removeItem={(id) => this.removeFromCart(id)}
                        />
                        { this.state.showTotal ? 
                            <div className='user_cart_sum'>
                                Total amount: $ {this.state.total}
                            </div>
                        : 
                            this.state.showSuccess ? 
                                <div className='cart_success'>
                                    <FaSmile />
                                    <div>
                                        Thank You
                                    </div>
                                    <div>
                                        Your order is now complete
                                    </div>
                                </div>
                            :
                            this.showNoItemMessage()
                        }
                    </div>
                    {
                        this.state.showTotal ?
                            <div className='paypal_button_container'>
                                <Paypal 
                                    toPay={this.state.total}
                                    transactionError={(data) => this.transactionError(data)}
                                    transactionCanceled={(data) => this.transactionCanceled(data)}
                                    onSuccess={(data) => this.transactionSuccess(data)}
                                />
                            </div>
                        : null
                    }
                </div>
            </UserLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Cart)
