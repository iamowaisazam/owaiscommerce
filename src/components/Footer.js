import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {MyContext} from '../config/Context';

import Images from '../config/Images'

const Footer = () => {
  const Context = useContext(MyContext);


  return (<>

       <section className="bg-pink py-9 position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center mb-1">
            <div className="col-lg-6 col-md-10">
              <div className="mb-4">
                <h2 className="mb-0">Be the first and get weekly updates</h2>
              </div>
              <div className="subscribe-form">
                <form id="mc-form" className="row align-items-center no-gutters mb-3">
                  <div className="col">
                    <input  name="EMAIL" className="email form-control input-2 bg-white" placeholder="Email Address" required type="email" />
                  </div>
                  <div className="col-auto">
                    <input className="btn dark-btn overflow-auto" name="subscribe" defaultValue="Subscribe" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      <footer className="py-11 bg-dark-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4"> <a className="footer-logo text-white h2 mb-0" href="index.html"> 
            <img className="img-fluid" src={Images.logo2} alt="" /> </a>
              <p className="my-3 text-muted pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit a nibh ullamcorper dictum a malesuada ex. Donec sit amet volutpat nunc.</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-facebook" /></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-dribbble" /></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-instagram" /></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-twitter" /></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className="la la-linkedin" /></a> </li>
                <li className="list-inline-item"><a className="text-muted ic-2x" href="#"><i className=" lab la-pinterest-p" /></a> </li>
              </ul>
            </div>
            <div className="col-12 col-lg-8 mt-6 mt-lg-0">
              <div className="row">
                <div className="col-12 col-sm-4 navbar-white">
                  <h6 className="mb-4 text-white font-w-5">Quick Links</h6>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Shipment</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="about-us-1.html">About</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="shop-grid-left-sidebar.html">Shop</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="faq.html">Faq</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="blog-card.html">Blogs</a> </li>
                    <li className="nav-item"><a className="nav-link text-muted font-w-4" href="contact-us.html">Contact Us</a> </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-white">
                  <h6 className="mb-4 text-white font-w-5">Information</h6>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="terms-and-conditions.html">Term Of Service</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="privacy-policy.html">Privacy Policy</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Support</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Orders History</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Your Account</a> </li>
                    <li className="nav-item"><a className="nav-link text-muted font-w-4" href="#">Suppliers</a> </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-white">
                  <h6 className="mb-4 text-white font-w-5">Shopping Guide</h6>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Site Map</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Search Terms</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Advanced Search</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Return policy</a> </li>
                    <li className="mb-3 nav-item"><a className="nav-link text-muted font-w-4" href="#">Where is my order?</a> </li>
                    <li className="nav-item"><a className="nav-link text-muted font-w-4" href="#">Our Story</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-9">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex footer-box">
                <div className="mr-4">
                  <i className="las la-map-marker-alt ic-2x icon-img" /> 
                  </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">Location</h6>
                  <p className="mb-0 font-w-4 text-muted">Flipmarto, 789 Main rd, Anytown,
                    CA 12345 USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex footer-box">
                <div className="mr-4"> <i className="las la-envelope ic-2x icon-img" /> </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">Email us</h6>
                  <a className="text-muted font-w-4" href="mailto:themeht23@gmail.com"> themesground@gmail.com</a><br />
                  <a className="text-muted font-w-4" href="mailto:themeht23@gmail.com"> flipmarto@gmail.com</a> </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-lg-0">
              <div className="d-flex footer-box">
                <div className="mr-4"> <i className="las la-mobile ic-2x icon-img" /> </div>
                <div>
                  <h6 className="mb-1 text-white font-w-5">24/7 Support Service</h6>
                  <p className="mb-0 font-w-4 text-muted">Call for styling advice on <br />
                    +123 1234 5678 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </>);
}

export default Footer;
