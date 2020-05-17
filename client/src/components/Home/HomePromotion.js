import React from 'react';
import MyButton from '../utils/button';
import featured_home_3 from '../../public/images/featured/featured_home_3.jpg';

const HomePromotion = (props) => {

    const promotion = {
        img: featured_home_3,
        lineOne: 'Up to 40% off',
        lineTwo: 'In second',
        linkTitle: 'Shop now',
        linkTo: '/shop'
    }

    const renderPromotion = () => (
        promotion ?
            <div className='home_promotion_img'
                style={{
                    background:`url(${promotion.img})`
                }}
            >
                <div className='tag title'>{promotion.lineOne}</div>
                <div className='tag low_title'>{promotion.lineTwo}</div>
                <div>
                    <MyButton 
                        type="default"
                        title={promotion.linkTitle}
                        linkTo={promotion.linkTo}
                        addStyle={{
                            margin:'10px 0 0 0'
                        }}
                    />
                </div>
            </div>
        :null
    )

    return (
        <div className='home_promotion'>
            {renderPromotion()}            
        </div>
    )
}

export default HomePromotion;