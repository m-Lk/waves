import React from 'react';
import UserLayout from '../../hoc/User';
import MyButton from '../utils/button';
import HistoryBlock from '../utils/User/HistoryBlock';

export default function UserDashboard({user}) {
    return (
        <UserLayout>
            <div>
                <div className='user_nfo_panel'>
                    <h1>User Information</h1>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton 
                        type="default"
                        title="Edit acount info"
                        linkTo="/user/user_profile"
                    />
                </div>
                {
                    user.userData.history ?
                        <div className='user_nfo_panel'>
                            <h1>History Purchases</h1>
                            <div className='user_product_block_wrapper'>
                                <HistoryBlock 
                                    products={user.userData.history}
                                />
                            </div>
                        </div>
                    : null
                }


            </div>
        </UserLayout>
    )
}
