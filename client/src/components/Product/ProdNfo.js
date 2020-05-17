import React from 'react';
import MyButton from '../utils/button';

import { FaTruck, FaCheck, FaTimes } from 'react-icons/fa';

export default function ProdNfo(props) {
    const detail = props.detail;

    const showProdTags = (detail) => (
        <div className='product_tags'>
            {detail.shipping ? 
                <div className='tag'>
                    <div><FaTruck /></div>
                    <div className='tag_text'>
                        <div>Free Shipping</div>
                        <div>And Return</div>
                    </div>
                </div>
            : null}
            {
                detail.available ?
                    <div className='tag'>
                        <div><FaCheck /></div>
                        <div className='tag_text'>
                            <div>Available</div>
                            <div>in Store</div>
                        </div>
                    </div>
                : 
                    <div className='tag'>
                        <div><FaTimes /></div>
                        <div className='tag_text'>
                            <div>Not Available</div>
                            <div>preorder only</div>
                        </div>
                    </div>
            }
        </div>
    )

    const showProdActions = (detail) => (
        <div className='product_actions'>
            <div className='price'>${detail.price}</div>
            <div className='cart'>
                <MyButton 
                    type='add_to_cart_link'
                    runAction={() => {
                        props.addToCart(detail._id)
                    }}
                />
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product_specifications">
            <h2>Specs:</h2>
            <div className='item'>
                <strong>Frets:</strong> {detail.frets}
            </div>
            <div className='item'>
                <strong>Wood:</strong> {detail.wood.name}
            </div>
        </div>
    )

    return (
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            { showProdTags(detail)}
            { showProdActions(detail)}
            { showProdSpecifications(detail)}
        </div>
    )
}
