import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = (Props) => {
  return ( <>
     <section  id="loader" className="py-5 d-flex align-items-center">
        <div className="container-fluid">
        <div className="row ">
            <div className="col-12 text-center ">
            <Spinner  style={{ width: '6rem', height: '6rem' }} />
            </div>
        </div>
        </div>
    </section>
    </>);
}

export default Loader;