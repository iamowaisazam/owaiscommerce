import React from 'react';
import {NavLink} from 'react-router-dom';


// Components
import Bread from '../components/Bread';


const About = (Props) => {
  return (<>
      <section className="bg-light py-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 page-title">
                  <h1 className="h2 mb-0">About Us</h1>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                      <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                      <li className="breadcrumb-item active text-primary" aria-current="page">About Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
        </section>
  
        <section>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                  <img src={require(`../assets/images/about/01.jpg`)} className="img-fluid rounded shadow" alt="..." />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="ml-2"> 
                    <h2 className="font-w-5">About Our Fashion Store</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.</p>
                    <p>
                      Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. </p>
                  </div>
                </div>
              </div>
            </div>
         </section>
  </>);
}

export default About;
