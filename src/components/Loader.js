import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = (Props) => {
    
    const styles= {
        'position': 'absolute',
        'text-align': 'center',
        'margin': 'auto',
        'right': '50%',
        'zIndex': 1,
        'top': '91%',
    }


  return ( <>
     <section  style={styles} id="loader" className="py-5 d-flex align-items-center">
        <div className="container-fluid">
        <div className="row ">
            <div className="col-12 text-center ">
            <Spinner  style={{ width: '20rem', height: '20rem' }} />
            </div>
        </div>
        </div>
    </section>
    </>);
}

export default Loader;