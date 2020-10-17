import React from 'react';
import {NavLink} from 'react-router-dom';
const Hero = () => {
  return ( <>
  <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Bettter Digital Experience With Techie</h1>
            <h2>We are team of talanted designers making Web and Native Apps</h2>
            <div><NavLink to="/service" className="btn-get-started scrollto">Get Started</NavLink></div>
            </div>
            <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" >
               <img src="./assets/img/hero-img.png" className="img-fluid animated" alt="" />
            </div>
        </div>
        </div>
    </section>
    </>);
}

export default Hero;
