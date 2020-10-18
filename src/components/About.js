import React from 'react';
import {NavLink} from 'react-router-dom';
import aboutImg from '../assets/img/about.jpg'

const About = (Props) => {
  return ( <>
     <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" >
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" >
            <h3>We provide a complete suite of digital services Our agile approach helps you manage your growth</h3>
            <p className="font-italic">
            We’re much more than a team of techies; we are your strategic partner. Using our exceptional agile experience and a highly knowledgeable team, we do one thing only: Focus on meeting your customers’ expectations of an innovative and digital experience
            </p>
            <ul>
            <li><i className="icofont-check-circled"></i> We Are expert in custom Modern Web Native, mobile development</li>
              <li><i className="icofont-check-circled"></i> We Have attractive and original design works, fast, reliable quality.</li>
              <li><i className="icofont-check-circled"></i> we can put you and your business in the right place.</li>
            </ul>
            <NavLink to="/about" className="read-more">Read More <i className="icofont-long-arrow-right"></i></NavLink>
          </div>
        </div>
      </div>
    </section>
    </>);
}

export default About;
