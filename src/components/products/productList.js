
import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import{addToCart} from '../../store/actions/CartActions'
import{addToWish} from '../../store/actions/WishlistActions'
import _ from 'underscore';

const  ProductList = (Props) => {

    const Cart = useSelector( response => response.CartsReducer);
    const Wishlist = useSelector( response => response.WishReducer.products);
    const dispatch = useDispatch();
    const {data} = Props;

    const add = () => {

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

    const addWish = () => {

        dispatch({
            type:'success',
            message:"Added Into Wish"
          }); 

        dispatch(addToWish({
            id: data.id,
            title:data.title,
            price:data.price,
            thumbnail:data.thumbnail,
          }));
          
     }

     let found =  _.find(Wishlist,function(num){
        if(num.id == data.id){
          return num;
        }
    });


     useEffect(() => {
        
    


     },[]);
     
    return <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
    <div className="card product-card card--default rounded-0">
    <div className="hot-label">{data.discount.toFixed(2)}%</div>
    <NavLink className="card-img-hover d-block" to={`shop/product/${data.id}`} >
        <img className="card-img-back" src={require(`../../images/product/${data.thumbnail}`)}   />
        <img className="card-img-front"  src={require(`../../images/product/${data.thumbnail}`)}  /> 
    </NavLink>
    <div className="card-icons">
        {  
            found == undefined ? <div  className="card-icons__item">
                <a className="pointer"  onClick={addWish} data-toggle="tooltip" data-placement="left"  data-original-title="Add to wishlist"> <i className="pointer lar la-heart" /></a></div> : ''
        }
        <div className="card-icons__item"> 
          <a href="#" data-toggle="tooltip" data-placement="left"  data-original-title="Quick View">
              <span data-target="#quick-view" data-toggle="modal"> <i className="ion-ios-search-strong" /></span> 
          </a> 
        </div>
    </div>
    <div className="card-info">
        <div className="card-body">
        <div className="product-title font-w-5">
         <NavLink className="link-title-2" to={`shop/product/${data.id}`} > {data.title} </NavLink> 
        </div>
        <div className="mt-1"> 
            <span className="product-price text-red-1">
                <del className="text-muted"> ${data.sell}</del> ${data.price}</span>
            <div className="star-rating">
                <i className="las la-star" />
                <i className="las la-star" />
                <i className="las la-star" />
                <i className="las la-star" />
                <i className="las la-star" /> 
            </div>
        </div>
        </div>
        <div className="card-footer bg-transparent border-0">
        <div className="product-link d-flex align-items-center justify-content-center">
            <button onClick={add} className="btn-cart btn btn-red-2 mx-3" type="button">
                <i className="las la-shopping-cart mr-1" /> Add to cart 
            </button>
        </div>
        </div>
    </div>
  </div>
</div>


}


export default ProductList;