import React from 'react';
import './public/style.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Auth from './hoc/Auth';

import Home from './components/Home/index';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/Register';
import Shop from './components/Shop';
import ProductPage from './components/Product';


import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/AddProduct';
import ManageCategories from './components/User/Admin/ManageCategories';

import Cart from './components/User/Cart';
import UserProfile from './components/User/UserProfile';
import ManageSite from './components/User/Admin/ManageSite';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/user/dashboard' exact component={Auth(UserDashboard, true)} />
        <Route path='/user/cart' exact component={Auth(Cart, true)} />
        <Route path='/user/user_profile' exact component={Auth(UserProfile, true)} />
        <Route path='/admin/add_product' exact component={Auth(AddProduct, true)} />
        <Route path='/admin/manage_categories' exact component={Auth(ManageCategories, true)} />
        <Route path='/admin/site_info' exact component={Auth(ManageSite, true)} />

        <Route path='/product_detail/:id' exact component={Auth(ProductPage, null)} />
        <Route path='/register' exact component={Auth(Register, false)} />
        <Route path='/register_login' exact component={Auth(RegisterLogin, false)} />
        <Route path='/' exact component={Auth(Home, null)} />
        <Route path='/shop' exact component={Auth(Shop, null)} />
      </Switch>
    </Layout>
  )
}

export default Routes;