import React,{useEffect} from 'react';
import {NavLink,useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import _ from 'underscore';


const Product = () => {
    
    let  {id}  = useParams();
    
    const Products = useSelector( response => response.ProductsReducer);
    const Categories = useSelector( response => response.CategoriesReducer);

    let cat = [];

    let found =  _.find(Products.products,function(num){
        if(num.id == id){

            _.find(Categories.categories,function(category){
                if(num.categories.includes(category.id)){

                 cat.push(category);
                }
            });
       
          return num;
        }
    });
     


  const dispatch = useDispatch();
  console.log(Products.product);

  useEffect(() => {
       
    dispatch({
      type:'get_product',
      id:id
    })
     
      
  },[id]);
  return (<> 
            {
                found != null ? <> 
            <section className="bg-light py-6">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6 page-title">
                         <h1 className="h2 mb-0">{found.title}</h1>
                      </div>
                      <div className="col-md-6 mt-3 mt-md-0">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                            <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                             <li className="breadcrumb-item active text-primary" aria-current="page">{found.title}</li>
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
            <div className="col-lg-6 col-12">
              <div className="product-image">
                <div className="product_img_box">
                  <img id="product_img" src={require(`../../assets/images/product/${found.thumbnail}`)}  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="product-details">
                <h1 className="h4 mb-0 font-w-6">{found.title}</h1>
                <div className="star-rating mb-5">
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                </div> 
                    <span className="product-price h5 text-pink">
                    ${found.sell.toFixed(2)} <del className="text-muted h6">${found.price.toFixed(2)}</del>
                    </span>
                <ul className="list-unstyled my-5">
                  <li>
                      <small>Availibility: <span className="text-green"> In Stock</span> </small>
                  </li>
                  <li className="font-w-4">
                      <small>Categories : <span className="text-muted">
                         {
                             cat.map((item,i) =>{     
                             return <span key={i} >{item.title} </span>
                            })
                         }
                           </span>
                     </small>
                  </li>
                </ul>
                <p className="mb-5 border-top border-bottom pb-5 pt-5 desc">{found.description}</p>
                <div className="d-sm-flex align-items-center mt-5">
                  <button className="btn btn-primary btn-animated mr-sm-3 mb-3 mb-sm-0"><i className="las la-shopping-cart mr-2" />Add To Cart</button>
                  <a className="btn btn-animated btn-dark" href="#"> <i className="lar la-heart mr-2 ic-1-2x" />Add To Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6 border-top pt-7">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="mb-5">
                <h2 className="mb-0 font-w-6">Related Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">

          
            </div>
          </div>
        </div>
      </section>
        </div>


        </>: '' }
  </>);
}

export default Product;
