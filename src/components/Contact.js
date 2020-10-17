import React from 'react';


const Contact = () => {
  return ( <>
    <section  className="contact section-bg">
      <div className="container" >
        <div className="section-title">
          <h2>Contact</h2>
          <p>Give us a few minutes and we’ll give you clarity and direction when it comes to building a website or a mobile app for your business.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>techie@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:0,width: '100%', height: 384}} allowFullScreen></iframe>
          </div>
          <div className="col-lg-6">
            <form  className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control"  id="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"   />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              </div>
              <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button disabled type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
   
    </>);
}

export default Contact;
