import React, { useEffect, useState,useContext } from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import './assets/css/index.scss';
import Context from './config/Context';

    

// Views
import Home from './views/Home';
import Pricing from './views/Pricing';
import About from './views/About';
import Service from './views//Service';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import PortfolioDetail from './views/PortfolioDetail';
import Feature from './views/Feature';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {


  useEffect(() =>{

    
 
  });
  return <> 
          
        <Context >
            <Header/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact  path="/about" component={About} />
            <Route exact  path="/contact" component={Contact} />
            <Route exact  path="/service" component={Service} />
            <Route exact  path="/portfolio" component={Portfolio} />
            <Route   path="/portfolio/:id" component={PortfolioDetail} />
            <Route exact  path="/features" component={Feature} />
            <Route exact  path="/register" component={ () => <Register  />} />
            <Route exact  path="/login" component={() => <Login  /> } />
            <Route exact  path="/profile" component={() => <Profile  />} />
            <Route exact  path="/pricing" component={() => <Pricing  />} />
            <Redirect to={"/"} />
            </Switch>
            <Footer/>
        </Context>
 </> 
}

export default App;
