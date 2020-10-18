import React from 'react';
import featureImg from '../assets/img/features.png'
const Feature = () => {
  
  return ( <>
 <section id="features" className="features section-bg">
      <div className="container" >
        <div className="section-title">
          <h2>Features</h2>
          <p>We believe that technology plays vital role for grooming people and businesses. That’s why we always try to help people in achieving their objectives by using best technologies and solutions.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div className="icon-box mt-5 mt-lg-0" >
              <i className="bx bx-receipt"></i>
              <h4>QUALITY PRODUCTS</h4>
              <p>We believe in Quality that is essential to deliver the product on time and on the required quality</p>
            </div>
            <div className="icon-box mt-5" >
              <i className="bx bx-cube-alt"></i>
              <h4>TIMELY WORK</h4>
              <p>We always plan the Project Development schedule for deploying the Project on time with all completed requirements.</p>
            </div>
            <div className="icon-box mt-5" >
              <i className="bx bx-images"></i>
              <h4>RELIABILITY</h4>
              <p>Failure Free Products are our main target.We always develope the most reliable Products without any failure issue on future.</p>
            </div>
            <div className="icon-box mt-5" >
              <i className="bx bx-shield"></i>
              <h4>MAINTAINABLE</h4>
              <p>Our Products are fully maintainable for the injection of any new Functionality or Requirement.</p>
            </div>
          </div>
          <div className="image col-lg-6  order-lg-2 " >
            <img src={featureImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>);
}

export default Feature;
