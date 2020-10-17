import React,{useState,useEffect,useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {MyContext} from '../config/Context';

const Header = (Props) => {

  const {auth,firebase} = useContext(MyContext);

  useEffect(() => {
   
  },[]);
 
        
  return (<>
  <header id="header" className={`fixed-top  ${Props.type}`}>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-9 d-flex align-items-center">
          <h1 className="logo mr-auto">
            <NavLink to="/">Techie</NavLink></h1>
            <NavLink to="/" className="logo mr-auto">
               <img src="assets/img/logo.png" alt="" className="img-fluid" />
             </NavLink>
            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li><NavLink exact activeClassName='active' to="">Home</NavLink></li>
                <li><NavLink activeClassName='active' to="/about">About</NavLink></li>
                <li><NavLink activeClassName='active' to="/service">Services</NavLink></li>
                <li><NavLink activeClassName='active' to="/features">Features</NavLink></li>
                <li><NavLink activeClassName='active' to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink activeClassName='active' to="/pricing">Pricing</NavLink></li>
                <li><NavLink activeClassName='active' to="/contact">Contact</NavLink></li>
                </ul>
              </nav>
            {auth == null ?
             <NavLink to="/register" className="get-started-btn scrollto"> Register </NavLink> :
             <NavLink to="/profile" className="get-started-btn scrollto"> Profile </NavLink> }
        </div>
      </div>
    </div>
    </header>
    </>);
}

export default Header;
