import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {Spinner} from 'reactstrap';
import {getCart,addToCart} from '../store/actions/CartActions'



const Cart = (Props) => {
  
  const Cart = useSelector( response => response.CartsReducer);
  const dispatch = useDispatch();



  const increament = (data) => {

    
     dispatch(addToCart({
        id: data.id,
        title:data.title,
        quantity:1,
        price:data.price,
        thumbnail:data.thumbnail,
        type:'i'
      }));
         
  }

  const decreament = (data) => {

    dispatch(addToCart({
      id: data.id,
      title:data.title,
      quantity:1,
      price:data.price,
      thumbnail:data.thumbnail,
      type:'m'
    }));
 }

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
           <section className="bg-light py-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 page-title">
                  <h1 className="h2 mb-0">Cart</h1>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                      <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                      <li className="breadcrumb-item active text-primary" aria-current="page">Cart</li>
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
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="cart-table table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  { Cart.products != null ?

                       
                    Cart.products.map((item,i,arr) => {

                      total += item.price * item.quantity ;

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
                                <td> <span className="product-price text-muted">${item.price}</span> </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                          <button onClick={ () => {
                                                decreament(item);
                                          }}  class="btn-product btn-product-up"> <i class="las la-minus"></i></button>
                                          <button  readOnly className="font-weight-bold btn-product btn-product-down"> {item.quantity} </button>
                                          <button onClick={ () => {
                                                increament(item);
                                          }} readOnly className="btn-product btn-product-down"> <i class="las la-plus"></i></button>
                                     </div>
                                  </td>
                                  <td> 
                                     <span className="product-price text-dark font-w-6">${item.price * item.quantity}</span>
                                      <button  onClick={ () => {
                                                remove(item);
                                          }} className="close-link">
                                        <i className="las la-times" />
                                        </button>
                                  </td>
                           </tr>                           
                       })

                      : <tr><td colSpan="100%" className="text-center" > <span className="product-price text-dark font-w-6">Cart is Empty </span></td></tr>
                    }

                    { total == 0 ?  <tr><td colSpan="100%" className="text-center" > <span className="product-price text-dark font-w-6">Cart is Empty </span></td></tr> : '' }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 pl-lg-5 mt-8 mt-lg-0">
              <div className="border rounded p-5 bg-light-4">
                <h4 className="text-black text-left mb-2 font-w-6">Cart Totals</h4>
                <div className="d-flex justify-content-between align-items-center border-bottom py-3"> 
                  <span className="text-muted">Subtotal</span>  <span className="text-dark">${total}</span> 
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                    <span className="text-muted">Tax</span>  <span className="text-dark">$0.00</span> 
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 mb-5"> 
                   <span className="text-dark h5">Total</span>  
                   <span className="text-dark font-w-6 h5">${total}</span> 
                </div> 
                 <NavLink className="btn btn-primary btn-animated btn-block" to="/login" >Proceed To Checkout </NavLink>
                <NavLink className="btn btn-dark btn-animated mt-3 btn-block" to="/shop">Continue Shopping</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
  </>);
}

export default Cart;
