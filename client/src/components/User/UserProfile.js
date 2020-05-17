import React from 'react';
import UserLayout from '../../hoc/User';
import UpdatePersonalNfo from './UpdatePersonalNfo';

export default function UserProfile() {
    return (
        <UserLayout>
            <h1>Profile</h1>
            <UpdatePersonalNfo />
            
        </UserLayout>
    )
}
