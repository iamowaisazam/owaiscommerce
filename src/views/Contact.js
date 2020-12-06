import React from 'react';
import {NavLink} from 'react-router-dom';


// Components
import Bread from '../components/Bread';


const Contact = () => {
  return (<>

<section className="bg-light py-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 page-title">
                  <h1 className="h2 mb-0">Contact Us</h1>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                      <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                      <li className="breadcrumb-item active text-primary" aria-current="page">Contact Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
        </section>
      
      <div className="page-content" >
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <form  className="row" method="post" action="http://themesground.com/flipmarto/demo/html/php/contact.php" >
                <div className="messages" />
                <div className="form-group col-md-6">
                  <label>First Name <span className="text-danger">*</span></label>
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required data-error="Name is required." />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name <span className="text-danger">*</span></label>
                  <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required data-error="Name is required." />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-6">
                  <label>Email Address <span className="text-danger">*</span></label>
                  <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required data-error="Valid email is required." />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-6">
                  <label>Phone Number <span className="text-danger">*</span></label>
                  <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required data-error="Phone is required" />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-12">
                  <label>Message <span className="text-danger">*</span></label>
                  <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required data-error="Please,leave us a message." defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-12 mt-4">
                  <button className="btn btn-primary btn-animated"><span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-6 mt-lg-0">
              <div className="border-0 rounded p-5 bg-dark-1 contact-info">
                <div className="d-flex mb-4 border-bottom pb-4">
                  <div className="mr-2"> <i className="las la-map-marker-alt ic-2x text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1 text-white">We are located here for you</h6>
                    <p className="mb-0">Flipmarto, 789 Main rd, Anytown, CA 12345 USA</p>
                  </div>
                </div>
                <div className="d-flex mb-4 border-bottom pb-4">
                  <div className="mr-2"> <i className="las la-envelope ic-2x text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1 text-white">We're here for you! Just get answers</h6>
                    <a href="#">info@domain.com / services@domain.com</a>
                  </div>
                </div>
                <div className="d-flex mb-4 border-bottom pb-4">
                  <div className="mr-2"> <i className="las la-mobile ic-2x text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1 text-white">Have any questions? Reach us by phone</h6>
                    <a href="#">1-800-222-000 / 1-800-222-002</a>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mr-2"> <i className="las la-pen ic-2x text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1 text-white">Explore most popular help topics</h6>
                    <span>Lorem ipsum is simply dummy text typesetting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>

  </>);
}

export default Contact;
