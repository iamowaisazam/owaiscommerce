import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {MyContext} from '../config/Context';


const Footer = () => {
  const Context = useContext(MyContext);


  return (<>
          <footer id="footer" >
            <div className="footer-top">
              <div className="container">
              <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Techie</h3>
              <p>A108 Adam Street <br/>
                  New York, NY 535022 <br/>
                  United States <br/> <br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> techie@gmail.com<br/>
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/service">Services</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/contact">Contact Us</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/portfolio">Portfolios</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/register">Register</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Web Design</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Web Development</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Product Management</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Marketing</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Graphic Design</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Email Support. Please email us your questions regarding our products</p>
                <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              Copyright <strong><span>Techie</span></strong>. All Rights Reserved
            </div>
            <div className="credits"> Designed by <a href="https://owaisazamtechnical.com/">Owais Azam Technical</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <NavLink to="#" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
            <NavLink to="#" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
            <NavLink to="#" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
            <NavLink to="#" className="google-plus"><i className="bx bxl-skype"></i></NavLink>
            <NavLink to="#" className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
          </div>
        </div>
        </div>  
      </footer>
  </>);
}

export default Footer;
