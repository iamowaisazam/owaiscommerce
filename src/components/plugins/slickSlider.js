
import React, {component,useEffect} from "react";
import {NavLink} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Spinner } from 'reactstrap';

import {useSelector,useDispatch} from 'react-redux';
import{addToCart} from '../../store/actions/CartActions'
import{addToWish} from '../../store/actions/WishlistActions'


const SlickSlider = (Props) => {
    
    const { products } = Props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };



    const Cart = useSelector( response => response.CartsReducer);
    const Wishlist = useSelector( response => response.WishReducer.products);

    const dispatch = useDispatch();
 

   

    const add = (data) => {

      dispatch({
        type:'success',
        message:"Added Into Cart"
      }); 

       dispatch(addToCart({
           id: data.id,
           title:data.title,
           quantity:1,
           price:data.price,
           thumbnail:data.thumbnail,
         }));

    }

    const addWish = (data) => {

      dispatch({
        type:'success',
        message:"Added Into Wishlist"
      }); 

        dispatch(addToWish({
            id: data.id,
            title:data.title,
            price:data.price,
            thumbnail:data.thumbnail,
          }));
          
     }

    

    return (
      <div className="" >
        <Slider {...settings}>

        { products != null ?

             products.map((val,i,arr) => {

                 //  let checkProductExist =  Wishlist.find((item) => {  if(val.id == item.id){ return true  } } );


                    return<div key={i} className="item p-2">
                      <div className="card product-card card--default"> 
                      <div className="hot-label">{val.discount.toFixed(2)}%</div>
                        <NavLink className="card-img-hover d-block" to={`shop/product/${val.id}`} > 
                         <img className="card-img-top card-img-back" src={require(`../../assets/images/product/${val.thumbnail}`)}  /> 
                         <img className="card-img-top card-img-front" src={require(`../../assets/images/product/${val.hover}`)} /> 
                       </NavLink>
                         <div className="card-icons">
                        
                            <div className="card-icons__item"> 
                                <a href="#" data-toggle="tooltip" data-placement="left"  data-original-title="Quick View">
                                <span data-target="#quick-view" data-toggle="modal"> 
                                <i className="ion-ios-search-strong" />
                                </span> </a> 
                            </div>
                          
                         </div>
                          <div className="card-info">
                           <div className="card-body">
                           <div className="product-title font-w-5">
                              <NavLink className="link-title-2" to={`shop/product/${val.id}`} > {val.title} </NavLink> 
                            </div>
                            <div className="mt-1">
                                 <span className="product-price text-red-1">
                                    <del className="text-muted">${val.sell}</del> ${val.price}
                                 </span>
                                 <div className="star-rating"> 
                                    <i className="las la-star" />
                                    <i className="las la-star" />
                                    <i className="las la-star" />
                                    <i className="las la-star" /> 
                                 </div>
                            </div>
                            </div>
                            <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                                <button onClick={ () => {

                                  add(val);

                                } }  className="btn-cart btn btn-red-2 mx-3" type="button">
                                  <i className="las la-shopping-cart mr-1" /> Add to cart 
                                  </button>
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

  export default SlickSlider
