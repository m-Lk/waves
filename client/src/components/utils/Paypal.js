import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

// JohnDoeBuyer@personal.example.com testing123
//RogerBuyer@business.example.com

export default class Paypal extends Component {
    
    render() {

        const onSuccess = (payment) => {
            //console.log(JSON.stringify(payment))
            /*
            {
                "paid":true,	
                "cancelled":false,
                "payerID":"V69UV8BV5JNBQ",
                "paymentID":"PAYID-L2577QI1UF28711H0789050X",
                "paymentToken":"EC-4SN76504B3818290A",
                "returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-L2577QI1UF28711H0789050X&token=EC-4SN76504B3818290A&PayerID=V69UV8BV5JNBQ",
                "address":{
                    "recipient_name":"John Doe",
                    "line1":"1 Main St",
                    "city":"San Jose",
                    "state":"CA",
                    "postal_code":"95131",
                    "country_code":"US"
                    },
                "email":"JohnDoeBuyer@personal.example.com"
            }
            */

            this.props.onSuccess(payment);
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: 'ATEYWlv0NInsw7Rmo8SL8iAtcqfYEi1FQj223aiwu8_JS2wCe4cTPDBfy9WHTjQZs0lBQFF8DYMh_cMV',
            production:''
        }

        return (
            <div>
                <PaypalExpressBtn 
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'large',
                        color:'blue',
                        shape:'rect',
                        label: 'checkout'
                    }}
                />
            </div>
        )
    }
}
