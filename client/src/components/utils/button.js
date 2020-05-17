import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingBag } from 'react-icons/fa';

export default function MyButton(props) {

    const buttons = () => {
        let template='';
        
        switch(props.type){
            case "default":
                template = <Link 
                    className={!props.altClass ? 'link_default': props.altClass}
                    to={props.linkTo}
                    {...props.addStyles}
                >
                    {props.title}
                </Link>
            break;
            case 'bag_link':
                template = 
                    <div className='bag_link'
                    onClick={() => {
                        props.runAction();
                    }}>
                        <FaShoppingBag 
                            
                        />
                    </div>
            break;
            
            case 'add_to_cart_link':
                template =
                    <div className="add_to_cart_link"
                        onClick={() => {
                            props.runAction();
                        }}
                    >
                        <FaShoppingBag />
                        Add to Cart
                    </div>
            break;
            default:
                template = '';
        }

        return template;
    }

    return (
        <div className='my_link'>
            {buttons()}
        </div>
    )
}
