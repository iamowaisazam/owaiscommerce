import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {Spinner} from 'reactstrap';
import {get_wishlist,removeWishlist} from '../store/actions/WishlistActions'


const Wishlist = (Props) => {

  const Wish = useSelector( response => response.WishReducer);
  const Products = useSelector( response => response.ProductsReducer.products);
  const dispatch = useDispatch();

  const remove = (parm) => {

    dispatch(removeWishlist(parm));

  }

  return (<>
      <section className="bg-light py-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 page-title">
                  <h1 className="h2 mb-0">Wishlist</h1>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                      <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                      <li className="breadcrumb-item active text-primary" aria-current="page">Wishlist</li>
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
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="cart-table table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Excerpt</th>
                      <th scope="col">Price</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                  { Wish.products != null ?

                    Wish.products.map((item,i,arr) => {

                     let detail = Products.find((val) => {  if(val.id == item.id){ return true  } } );
                      
                    return <tr key={i} >
                              <td>
                                <div className="cart-thumb media align-items-center">
                                      <a href="#">
                                        <img className="img-fluid" src={require(`../assets/images/product/${item.thumbnail}`)} alt="" />
                                      </a>
                                    <div className="media-body ml-3">
                                        <div className="product-title mb-2">
                                            <a className="link-title" href="#">{item.title}</a>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                <td> <span className="product-price text-muted">{detail.excerpt} </span> </td>
                                <td> <span className="product-price text-muted">${item.price}</span> </td>
                                <td> <button className="pointer btn-cart btn btn-pink mx-3" type="button" 
                                       onClick={ () => {
                                              remove(item);
                                        }} 
                                        >  Remove </button>
                              </td>
                          </tr>                           
                      })

                      : '' }

                  { 1 == 0 ?  <tr><td colSpan="100%" className="text-center" > <span className="product-price text-dark font-w-6">Wishlist is Empty </span></td></tr> : '' }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
  </>);
}

export default Wishlist;
