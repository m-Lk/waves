import React, { Component } from 'react';
import PageTop from '../utils/PageTop';

import ProdNfo from './ProdNfo';
import ProdImg from './ProdImg';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/product_actions';
import { addToCart } from '../../actions/user_actions';

class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        
        this.props.dispatch(getProductDetail(id)).then(response => {
            if(!this.props.products.prodDetail) {
                console.log('No Article Found');
                this.props.history.push('/');
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }

    addToCartHandler = (id) => {
        this.props.dispatch(addToCart(id))
    }

    render() {
        return (
            <div>
                <PageTop 
                    title='Product Detail'
                />

                <div className="container">
                    {
                        this.props.products.prodDetail ?
                            <div className='product_detail_wrapper'>
                                <div className='left'>
                                        <div style={{width: '500px'}}>
                                            <ProdImg 
                                                detail={this.props.products.prodDetail}
                                            />
                                        </div>
                                </div>
                                <div className='right'>
                                    <ProdNfo 
                                        addToCart={(id) => this.addToCartHandler(id)}
                                        detail={this.props.products.prodDetail}
                                    />
                                </div>
                            </div>
                        : 'Loading'
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);
