import React from 'react';

const Bread = (Props) => {
  return ( <>
     <section style={{height:'auto'}}  id="hero" className="py-5 d-flex align-items-center">
        <div className="container-fluid">
        <div className="row ">
            <div className="col-12 text-center ">
            <h1>{Props.title}</h1>
            <h2>{Props.des}</h2>
            </div>
        </div>
        </div>
    </section>
    </>);
}

export default Bread;
