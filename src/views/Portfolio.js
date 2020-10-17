import React from 'react';


// Components
import Bread from '../components/Bread';
import PortfolioComponent from '../components/Portfolio';

const Portfolio = () => {
  return (<>
  
      <Bread title="Our Portfolios" des="We are team of talanted designers making Web and Native Apps" />
       <PortfolioComponent/>
    
  </>);
}

export default Portfolio;
