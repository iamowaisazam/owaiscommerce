import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ProductList  from '../../components/products/productList';
import { Spinner } from 'reactstrap';

const Shop = () => {

  const dispatch = useDispatch();
  const {ProductsReducer,CategoriesReducer} = useSelector( response => response);
  const cat = CategoriesReducer.categories ;

  return (<>
            <section className="bg-light py-6">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6 page-title">
                        <h1 className="h2 mb-0">Shop</h1>
                      </div>
                      <div className="col-md-6 mt-3 mt-md-0">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                            <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                            <li className="breadcrumb-item active text-primary" aria-current="page">Shop</li>
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
                <div className="row">
                  <div className="col-lg-9 col-md-12 order-lg-1">
                    <div className="row mb-4 align-items-center">
                      <div className="col-md-5 mb-3 mb-md-0"> <span className="text-dark">Showing 1 to 12 of 30 total</span>
                      </div>
                      <div className="col-md-7 d-flex align-items-center justify-content-md-end">
                        <div className="view-filter">
                          <a className="active" href="shop-grid-left-sidebar.html"><i className="las la-th-large" /></a>
                          <a href="shop-list-left-sidebar.html"><i className="las la-bars" /></a>
                        </div>
                        <div className="sort-filter ml-2 d-flex align-items-center">
                          <select className="custom-select" id="inputGroupSelect02">
                            <option selected>Default sorting</option>
                            <option value={1}>Newest Item</option>
                            <option value={2}>Populer</option>
                            <option value={3}>Best Match</option>
                          </select>
                        </div>
                      </div>
                    </div>


                    <div className="row">

                    { ProductsReducer.products != null ?

                    ProductsReducer.products.map((val,i,arr) => {

                          return <ProductList  key={i} data ={val} />})

                          :  <div className='col-12 text-center' >
                              <Spinner  style={{ width: '3rem', height: '3rem' }} />
                          </div>
                    } 
                        
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
                    <div>
                      <div className="widget widget-categories mb-4 border rounded p-4">
                        <h5 className="widget-title mb-3">Categories</h5>
                        <div id="accordion" className="accordion">
                          <div className="card border-0 mb-2">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">Clothing</a>
                              </h6>
                            </div>
                            <div id="collapse1" className="collapse show" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li> <a href="#">Western Wear</a></li>
                                  <li> <a href="#">Fitness &amp; Outdoors</a></li>
                                  <li> <a href="#">Ethnic Wear</a></li>
                                  <li> <a href="#">Beach Clothing</a></li>
                                  <li> <a href="#">Swimsuits</a></li>
                                  <li> <a href="#">Casual Dresses</a></li>
                                  <li> <a href="#">Raincoats</a></li>
                                  <li> <a href="#">Sleep &amp; Lounge Wear</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Accessories</a>
                              </h6>
                            </div>
                            <div id="collapse2" className="collapse" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li><a href="#">Handkerchiefs</a>
                                  </li>
                                  <li><a href="#">Suspenders</a>
                                  </li>
                                  <li><a href="#">Pocket Squares</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Jewellery</a>
                              </h6>
                            </div>
                            <div id="collapse3" className="collapse" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li><a href="#">Chains &amp; Necklaces</a>
                                  </li>
                                  <li><a href="#">Earrings</a>
                                  </li>
                                  <li><a href="#">Pendants</a>
                                  </li>
                                  <li><a href="#">Bangles &amp; Bracelets</a>
                                  </li>
                                  <li><a href="#">Anklets</a>
                                  </li>
                                  <li><a href="#">Nose Rings &amp; Pins</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse4">Footwear</a>
                              </h6>
                            </div>
                            <div id="collapse4" className="collapse" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li><a href="#">Running Shoes</a>
                                  </li>
                                  <li><a href="#">Sneakers</a>
                                  </li>
                                  <li><a href="#">Casual Shoes</a>
                                  </li>
                                  <li><a href="#">Formal Shoes</a>
                                  </li>
                                  <li><a href="#">Hiking Footwear</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse5">Electronics</a>
                              </h6>
                            </div>
                            <div id="collapse5" className="collapse" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li><a href="#">Cameras</a>
                                  </li>
                                  <li><a href="#">Television</a>
                                  </li>
                                  <li><a href="#">Computers</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card border-0">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <a className="link-title" data-toggle="collapse" data-parent="#accordion" href="#collapse6">Watches</a>
                              </h6>
                            </div>
                            <div id="collapse6" className="collapse" data-parent="#accordion">
                              <div className="card-body text-muted">
                                <ul className="list-unstyled">
                                  <li><a href="#">Waterproof</a>
                                  </li>
                                  <li><a href="#">Sports</a>
                                  </li>
                                  <li><a href="#">Stylish</a>
                                  </li>
                                  <li><a href="#">Metal</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget mb-4">
                        <div className="position-relative rounded overflow-hidden"> 
                          {/* Background */} 
                          <img className="img-fluid hover-zoom" src={require('../../assets/images/product-ad/side-banner.jpg')}  /> 
                          {/* Body */}
                          <div className="position-absolute top-50 pl-5 side-banner">
                            <h6 className="text-dark">Todays Deals</h6>
                            {/* Heading */}
                            <h4 className="font-w-6 text-dark">Accessories <br />
                              Special</h4>
                            {/* Link */} <a className="more-link" href="#">Shop Now </a> </div>
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

export default Shop;
