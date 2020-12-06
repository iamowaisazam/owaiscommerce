import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Switch,Route, Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getCart} from './store/actions/CartActions';
import {get_wishlist} from './store/actions/WishlistActions';
import {getAuth} from './store/actions/AuthActions';



//import './assets/css/index.scss';
import Context from './config/Context';


// Views
import Home from './views/Home';
import About from './views/About';

import Contact from './views/Contact';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Dashboard/Profile';
import PrivacyPolicy from './views//PrivacyPolicy';
import TermsCondition from './views/TermsCondition';
import Wishlist from './views/Wishlist';
import Cart from './views/Cart';

//Shop
import Shop from './views/shop/Shop';
import Product from './views/shop/Product';


// Components
import Header from './components/Header';
import Footer from './components/Footer';



import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/line-awesome.min.css';
import './assets/css/ionicons.min.css';
import './assets/css/spacing.css';
import './assets/css/all.min.css';
import './assets/css/theme.min.css';
import './assets/css/style.css';


import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
//import 'owl.carousel/dist/owl.carousel';

const App = () => {
   
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const onLoad = async () => {
   
       await  dispatch(getCart());
       await  dispatch(get_wishlist());

          let token = localStorage.getItem('token');
          if(token != null ){
            axios.defaults.headers = {
              'Content-Type': 'application/json',
              Authorization: 'Bearer '+token
            }

           await dispatch(getAuth(token));
          }

        setLoading(false);

  }


  useEffect(() =>{

    onLoad();
          

    
   
  });
  return <>  { loading == true ? <>     </> : 
             <>
            <Header/>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact  path="/about" component={About} />
              <Route exact  path="/contact" component={Contact} />
              <Route exact  path="/shop" component={Shop} />
              <Route exact  path="/shop/product/:id" component={Product} />
              <Route exact  path="/privacypolicy" component={PrivacyPolicy} />
              <Route exact  path="/termscondition" component={TermsCondition} />
              <Route exact  path="/wishlist" component={Wishlist} />
              <Route exact  path="/cart" component={Cart} />
              
              <Route exact  path="/register" component={ () => <Register  />} />
              <Route exact  path="/login" component={() => <Login  /> } />
              <Route exact  path="/profile" component={() => <Profile  />} />
              <Redirect to={"/"} />
              </Switch>            
            <Footer/>
            </>
            }
     </> 
   }

export default App;