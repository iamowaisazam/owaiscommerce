import React, { useEffect, useState,useContext } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCart,addToCart} from '.././store/actions/CartActions';
import {NavLink} from 'react-router-dom';
import {Spinner} from 'reactstrap';

const Header = (Props) => {

  const Cart = useSelector( response => response.CartsReducer.products);
  const Wishlist = useSelector( response => response.WishReducer.products);
  const auth = useSelector( response => response.AuthReducer.user);
  const dispatch = useDispatch();

 
  const remove = (data) => {
    dispatch(addToCart({
      id: data.id,
      title:data.title,
      quantity:1,
      price:data.price,
      thumbnail:data.thumbnail,
      type:'r'
    }));
}

  let total = 0;
  useEffect(() => {
   
  
  },[]);       
  return (<>
    <header className="site-header header-1">
    <div className="header-top bg-dark-1 py-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 d-flex align-items-center justify-content-between text-white">
            <div className="d-md-flex align-items-center call-info">
              <div className="d-flex align-items-center">
                <div className="text-white offer-text"><small>
                  <span>60%</span> discount on womens collection</small> </div>
              </div>
            </div>
            <div className="d-none d-md-flex align-items-center">
              <div className="social-icons">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a className="text-white" href="#"><i className="lab la-facebook-f"></i></a> </li>
                  <li className="list-inline-item"><a className="text-white" href="#"><i className="lab la-twitter"></i></a> </li>
                  <li className="list-inline-item"><a className="text-white" href="#"><i className="lab la-linkedin-in"></i></a> </li>
                  <li className="list-inline-item"><a className="text-white" href="#"><i className="lab la-instagram"></i></a> </li>
                  <li className="list-inline-item"><a className="text-white" href="#"><i className="lab la-pinterest-p"></i></a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="header-wrap">
      <div className="container">
        <div className="row"> 
      
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light position-static">
              <NavLink className="navbar-brand logo" to="/">
                <img className="img-fluid" src={require('.././assets/images/logo.png')} alt="" /> </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-auto">

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/" >Home</NavLink>
                  </li>  

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/about" >About</NavLink>
                  </li>  

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/shop" >Shop</NavLink>
                  </li> 

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/privacypolicy" >Privacy Policy</NavLink>
                  </li> 

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/termscondition" >Terms Condition</NavLink>
                  </li> 

                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link " to="/contact" >Contact</NavLink>
                  </li>  
              
                </ul>
              </div>

              <div className="right-nav align-items-center d-flex justify-content-end">
                <div className="mr-1 mr-sm-3 search-block">
                  <a href="#" className="search_trigger ml-3" >
                     <i className="las la-search"></i>
                    </a>
                  <div className="search_wrap container">
                    <span className="close-search">
                      <i className="ion-ios-close-empty"></i>
                    </span>
                     <form>
                      <input type="text" placeholder="Search" className="form-control" id="search_input" />
                      <button type="submit" className="search_icon"><i className="las la-search"></i></button>
                     </form>
                  </div>
                </div>

                {auth == null ?    
                    <NavLink to="/register" className="mr-1 mr-sm-3"><i className="las la-user-alt"></i></NavLink> :
                    <NavLink to="/profile" className="mr-1 mr-sm-3"> <i className="las la-user-alt"></i> </NavLink> 
                    }

                  <NavLink className="mr-3 d-none d-sm-inline" to="/wishlist">
                  {    Wishlist != null ? 
                      <span className="bg-white pr-2 pl-0 py-1 rounded" data-cart-items={Wishlist.length}>  
                      <i className="lar la-heart"></i>
                      </span> 
                      :<span className="bg-white pr-2 pl-0 py-1 rounded" data-cart-items={0}>  
                      <i className="lar la-heart"></i>
                      </span>  
                    }

                  
                  </NavLink>

                  <div className="dropdown cart_dropdown">
                    <a className="d-flex align-items-center" href="#">
                      { Cart != null ? 
                      <span className="bg-white pr-2 pl-0 py-1 rounded" data-cart-items={Cart.length}> 
                        <i className="las la-shopping-bag"></i> 
                      </span> 
                      :<span className="bg-white pr-2 pl-0 py-1 rounded" data-cart-items={0}> 
                       <i className="las la-shopping-bag"></i> 
                      </span> }
                    </a>
                    <div className="cart_box dropdown-menu dropdown-menu-right">
                      <ul className="cart_list">
                    
                        { Cart != null ?

                            Cart.map((item,i,arr) => {
                                
                               total += item.price * item.quantity ;

                              return <li key={i} > 
                                    <a onClick={ () => {
                                                remove(item);
                                          }} className="item_remove">
                                      <i className="ion-ios-close-empty"></i>
                                    </a> 
                                    <a href="#">
                                    <img src={require(`../assets/images/product/${item.thumbnail}`)} alt="cart_thumb2" />{item.title}</a>   
                                    <span className="cart_quantity"> {item.quantity} x <span className="cart_amount"> 
                                    <span className="price_symbole">$</span></span>{item.price}</span> 
                                    
                                </li>
                              })

                              : ""
                        }
                         
                      </ul>
                      <div className="cart_footer">
                        <p className="cart_total">
                          <strong>Subtotal:</strong> 
                          <span className="cart_price"> 
                        <span className="price_symbole">$</span></span>{ total}</p>
                        <p className="cart_buttons text-center ">
                          <NavLink to="/cart" className="btn btn-secondary view-cart ml-2 mr-2">View Cart</NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>




    </>);
}

export default Header;