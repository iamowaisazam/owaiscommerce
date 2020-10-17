import React,{useEffect,useContext,useState} from 'react';
import { Spinner } from 'reactstrap';
import Swiper from './Slider';
import {MyContext} from '../config/Context';
import {NavLink} from 'react-router-dom';

const Portfolio = () => {

  const {auth,firebase,portfolios} = useContext(MyContext);  
  useEffect(() => {

  },[]);
  return ( <>
 <section className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>offering wide range of products to our customers regarding different field of work. Furthermore, we design custom software according to client demand.</p>
        </div>
        <div className="row portfolio-container">
         
          { portfolios != null ?

          portfolios.map((val,i,arr) => {
      
          return <div key={i} className="col-lg-4 col-md-6 portfolio-item ">
                <div className=" portfolio-wrap">
                  <img src={val.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{val.title}</h4>
                    <p>App</p>
                  </div>
                  <div className="portfolio-links">
                    <NavLink to={'portfolio'+'/'+val.id} title="More Details">
                      <i className="bx bx-link"></i></NavLink>
                  </div>
                </div>
              </div>  })
          :  <div className='col-12 text-center' >
               <Spinner  style={{ width: '3rem', height: '3rem' }} />
             </div>
          }
        </div>
      </div>
    </section>
    </>);
}

export default Portfolio;
