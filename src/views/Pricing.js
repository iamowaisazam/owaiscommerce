import React,{useContext,useState,useEffect} from 'react';


// Components
import Bread from '../components/Bread';
import PortfolioComponent from '../components/Portfolio';
import {MyContext} from '../config/Context';
import { Spinner } from 'reactstrap';



const Pricing = () => {
  const [success,setSuccess] = useState();
  const {auth,firebase,packages,createOrder} = useContext(MyContext);  
  useEffect( () => {
    
  
  });
 
  
  const orderAdd = (event) => {
    let data = {
      package:event.title,
      price:event.price,
      packageId:event.packageId,
      email:auth.user.email,
      date:new Date(),
      status:'pending',
     }
       createOrder(data);
       setSuccess('Order Is Created Please Check Orders')
  }


  return (<>
     <Bread title="Our Pricing Plans" des="We are team of talanted designers making Web and Native Apps" />
      <section id="pricing" className="pricing section-bg">
            <div className="container" >
              <div className="section-title">
                <h2>Pricing</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
        
              <div className="row">

              { packages != null ?
              packages.map((val,i,arr) => {
              return <div key={i} className="py-3 col-lg-3 col-md-6" >
                        <div className="box">
                          <h3>{val.title}</h3>
                          <h4><sup>$</sup>{val.price}<span> / {val.type}</span></h4>
                          <ul>
                            <li>{val.description}</li>
                          </ul>
                          <div className="btn-wrap">
                            <button onClick={ () => { 
                                orderAdd({
                                          title:val.title,
                                          price:val.price,
                                          packageId:val.id
                                        }); 
                                        } 
                                    }
                            type="button" className="btn-buy">Buy Now </button>
                          </div>
                        </div>
                      </div>
                    })
                    :  <div className='col-12 text-center' >
                        <Spinner  style={{ width: '3rem', height: '3rem' }} />
                      </div>
                    }

              </div>
            </div>
          </section>

       
  </>);
}

export default Pricing;
