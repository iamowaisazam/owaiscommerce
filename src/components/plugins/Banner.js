
import React, {component,useEffect} from "react";
import {NavLink} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Spinner } from 'reactstrap';


const Banner = (Props) => {
    
    const { data } = Props;

    const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
         };

    useEffect(() => {
          
     


     },[]);
    return (
      <div className="" >
        <Slider {...settings}>

        { data != null ?

                data.map((val,i,arr) => {

                     let thumnb = require(`../../assets/images/bg/${val.banner}`);

                    return<div key={i}   className="banner-slider home-slide  no-pb owl-2" >
                            <div style={{ 'backgroundImage':`url(${thumnb})`}} className="item bg-pos-ct" >
                                <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-lg-7 col-md-12 custom-py-2 position-relative z-index-1">
                                    <h6 className="font-w-6 text-black animated3">{val.title}!</h6>
                                    <h1 className="mb-4 animated3 text-black">Discounts up to <br />
                                        30%  in July.</h1>
                                    <div className="animated3"> 
                                    <NavLink className="btn dark-red-bg2 rounded-0 text-white" to="/shop" >Shop Now</NavLink> </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                  </div>})

                    :  <div className='col-12 text-center' >
                        <Spinner  style={{ width: '3rem', height: '3rem' }} />
                    </div>
            }
         
        </Slider>
      </div>
    );
  }

  export default Banner