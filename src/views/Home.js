import React, { useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { Spinner } from 'reactstrap';
import {getCart} from '../store/actions/CartActions';



// Components
import Hero from '../components/Hero';
import Count from '../components/Count';
import Loader from '../components/Loader';
import Images from '../config/Images';
import ProductList  from '../components/products/productList';
import Slider  from '../components/plugins/slickSlider';
import Banner  from '../components/plugins/Banner';

const Home = (Props) => {
  
   const dispatch = useDispatch();
   const {ProductsReducer,CategoriesReducer} = useSelector( response => response);
   const cat = CategoriesReducer.categories ;



  const playVid = () => {

    var vid = document.getElementById("myVideo").play();
    var panel = document.getElementById("panel");
    var btn = document.getElementById("view-btn");
    panel.style.display = "none";
    btn.style.display = "inline-block";
  }

  const  pauseVid = () => { 
    
    var vid = document.getElementById("myVideo").play();
    vid.pause(); 
  } 


  useEffect( () => {

   

  },[]);

  return (<>

   {/* Sliders */}
    
         
   <section  className="container-fluid banner pos-r p-0 banner-full-img">
        <Banner data={CategoriesReducer.categories}  />
    </section>



     {/* Free Features */}
    <section className="services-block-1 pt-6 pb-2">
        <div className="container "> 
          {/* / .row */}
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex p-3">
                <div className="mr-3"> <i className="las la-truck ic-3x text-dark" /> </div>
                <div>
                  <h5 className="mb-0 text-dark">Free Shipping</h5>
                  <p className="mb-0 text-grey-dark">Order over $99</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-sm-0">
              <div className="d-flex p-3">
                <div className="mr-3"> <i className="las la-wallet ic-3x text-dark" /> </div>
                <div>
                  <h5 className="mb-0 text-dark">Money Return</h5>
                  <p className="mb-0 text-grey-dark">100% Guarentee</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="d-flex p-3">
                <div className="mr-3"> <i className="las la-briefcase ic-3x text-dark" /> </div>
                <div>
                  <h5 className="mb-0 text-dark">Return Policy</h5>
                  <p className="mb-0 text-grey-dark">30 Days Service</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="d-flex p-3">
                <div className="mr-3"> <i className="las la-mobile ic-3x text-dark" /> </div>
                <div>
                  <h5 className="mb-0 text-dark">24/7 Support</h5>
                  <p className="mb-0 text-grey-dark">Call +1 800 123 1234
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     

     {/* Categories */}
      <section className="p-0">
        <div className="container">
          <div className="row banner-list">

            <div className=" col-md-6 col-sm-12 col-12 category-grid-item cat-design-default categories-with-shadow">
              <div className="wrapp-category">
                <div className="category-image-wrapp"> <a href="#" className="category-image"> 
                <img src={require(`../assets/images/product-ad/${cat[0]['thumbnail']}`)}  alt="Clocks" /> </a></div>
                <div className="hover-mask">
                  <h3 className="category-title"> { cat[0]['title'] }
                  </h3>
                  <div className="more-products"><a href="#">22 products</a></div>
                </div>
                <a href="#" className="category-link" />
                </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12">
              <div className="row">

                <div className=" col-md-6 col-sm-6 col-12 category-grid-item cat-design-default categories-with-shadow">
                  <div className="wrapp-category">
                    <div className="category-image-wrapp">
                      <a href="#" className="category-image"> 
                      <img src={require(`../assets/images/product-ad/${cat[1]['thumbnail']}`)} alt="Clocks" /> </a>
                    </div>
                    <div className="hover-mask">
                      <h3 className="category-title">{ cat[1]['title']}
                      </h3>
                      <div className="more-products">
                        <a href="#">12 products</a>
                      </div>
                    </div>
                    <a href="#" className="category-link" />
                    </div>
                </div>

                <div className=" col-md-6 col-sm-6 col-12 category-grid-item cat-design-default categories-with-shadow product-category product" data-loop={3}>
                  <div className="wrapp-category">
                    <div className="category-image-wrapp">
                      <a href="#" className="category-image"> <img src={require(`../assets/images/product-ad/${cat[2]['thumbnail']}`)} /> </a></div>
                    <div className="hover-mask">
                      <h3 className="category-title"> { cat[2]['title']}
                      </h3>
                      <div className="more-products"><a href="#">12 products</a></div>
                    </div>
                    <a href="#" className="category-link" /></div>
                </div>

              </div>

              <div className="row">

                <div className=" col-md-6 col-sm-6 col-12 last category-grid-item cat-design-default categories-with-shadow product-category product last" data-loop={4}>
                  <div className="wrapp-category">
                    <div className="category-image-wrapp"> <a href="#" className="category-image">
                      <img src={require(`../assets/images/product-ad/${cat[3]['thumbnail']}`)} /> </a></div>
                    <div className="hover-mask">
                      <h3 className="category-title"> { cat[3]['title']}
                      </h3>
                      <div className="more-products"><a href="#">16 products</a></div>
                    </div>
                    <a href="#" className="category-link" /></div>
                </div>

                <div className=" col-md-6 col-sm-6 col-12 first category-grid-item cat-design-default categories-with-shadow product-category product first" data-loop={5}>
                  <div className="wrapp-category">
                    <div className="category-image-wrapp"> <a href="#" className="category-image">
                      <img src={require(`../assets/images/product-ad/${cat[4]['thumbnail']}`)} /> </a></div>
                    <div className="hover-mask">
                      <h3 className="category-title">{ cat[4]['title'] }
                      </h3>
                      <div className="more-products"><a href="#">12 products</a></div>
                    </div>
                    <a href="#" className="category-link" /></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="page-content"> 
        {/*product start*/}
        <section className="pb-6">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-6 col-md-10">
                <div>
                  <h2 className="mb-0 font-w-6">New Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">

                <div className="tab">
                  <nav className="mb-5 text-center">
                    <div className="nav nav-tabs nav-tabs-div d-inline-block justify-content-md-end red" id="nav-tab" role="tablist">
                       <a className="nav-item nav-link" id="nav-tab2" data-toggle="tab" href="#tab1-2" role="tab" aria-selected="true">
                         Top Rated</a>
                      
                       <a className="nav-item nav-link  active" id="nav-tab1" data-toggle="tab" href="#tab1-1" role="tab" aria-selected="false">
                         Best Seller</a> 
                      
                      <a className="nav-item nav-link" id="nav-tab3" data-toggle="tab" href="#tab1-3" role="tab" aria-selected="false">
                        Special</a> 
                      
                      </div>
                  </nav>
                  <div className="tab-content p-0" id="nav-tabContent">
                      <div role="tabpanel" className="tab-pane fade show active" id="tab1-1">
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

                      <div role="tabpanel" className="tab-pane fade show" id="tab1-2">
                        <div className="row">
                           { ProductsReducer.products != null ?

                            ProductsReducer.products.map((val,i,arr) => {

                                  return <ProductList  key={i}
                                  data ={val}
                                  />})

                                  :  <div className='col-12 text-center' >
                                      <Spinner  style={{ width: '3rem', height: '3rem' }} />
                                  </div>
                            } 
                          
                          </div>
                        </div>
                    
                    <div role="tabpanel" className="tab-pane fade show" id="tab1-3">
                      <div className="row">

                         { ProductsReducer.products != null ?

                          ProductsReducer.products.map((val,i,arr) => {

                                return <ProductList  key={i}
                                data ={val}
                                />})

                                :  <div className='col-12 text-center' >
                                    <Spinner  style={{ width: '3rem', height: '3rem' }} />
                                </div>
                          } 
                         
                       </div>
                    </div>
                 
                 
                  </div>
                </div>
              </div>
             </div>
             </div>
        </section>




     
      {/* Background Video */}
      <section className="p-0 video-bg ">
          <div className="container-fluid p-0"> 
            {/* / .row */}
            <div className="text-center">
              <div>
                <div className="container">
                  <div className="position-absolute text-left col-12 col-xl-3 col-lg-4 col-md-8 col-sm-8">
                    <h3>Special Deals</h3>
                    <h2>Summer Collection</h2>
                    <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. </p>
                    <button id="panel" onClick={playVid} type="button">
                      <i className="las la-play-circle" /></button>
                      <a className="btn dark-red-bg2 rounded-0 text-white" href="#" id="view-btn">View Collection</a>
                  </div>
                </div>
                <video id="myVideo" className="rounded-0" width="100%" loop 
                poster={Images.summerBg} 
                style={{objectFit: 'cover', height: '512px', zIndex: 100}}>
                  <source src={Images.summerVideo} type="video/mp4" />
                </video>
              </div> 
            </div>
          </div>
      </section>

         {/* Featured Products */}

         <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="bg-white">

                <div className="row justify-content-center text-center mb-4">
                  <div className="col-lg-8 col-md-10">
                    <div>
                      <h2 className="mb-0 font-w-6">Featured Products</h2>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="no-pb " >
                     <Slider products={ProductsReducer.products} />
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

export default Home;