import React from 'react';
import MyButton from '../utils/button';
import Login from '../Register_login/Login';

export default function RegisterLogin() {
    return (
        <div className='page_wrapper'>
            <div className='container'>
                <div className='register_login_container'>
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sem eros. Phasellus ultrices metus eget mi aliquet accumsan. Praesent facilisis sollicitudin nibh non lacinia</p>
                        <MyButton 
                            type="default"
                            title="Create an account"
                            linkTo='/register'
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registerd customer</h2>
                        <p>If you have an accout please log in.</p>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}
