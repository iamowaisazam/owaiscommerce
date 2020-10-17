import React,{useContext,useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {Spinner} from 'reactstrap';
import {MyContext} from '../config/Context';
import Helper from '../config/Helper';

// Components
import Bread from '../components/Bread';
import Portfolio from '../components/Portfolio';
    const PortfolioDetail = (Props) => {

    let  {id}  = useParams();
    const {portfolios} = useContext(MyContext);
    const [portfolio,setPortfolio] = useState({});

    useEffect(() => {
      let data = Helper.find(portfolios,id);
      setPortfolio(data);
      console.log(data);
    
    },[]);
   
  return (<>  
      <Bread title="Our Portfolio" des="We are team of talanted designers making Web and Native Apps" />
      <section className="portfolio">
        <div className="container">
             {Portfolio != null ? 
              <div>
                  <div className="portfolio-single section-title">
                    <h2>{portfolio.title}</h2>
                    <img src={portfolio.img} className=""  />
                    <p className="py-3" >{portfolio.description} </p>
                    </div>
                 
              </div>  :  <Spinner  style={{ width: '3rem', height: '3rem' }} />}
        </div>
    </section>
  </>);
}

export default PortfolioDetail;
