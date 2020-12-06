import React from 'react';
import {NavLink} from 'react-router-dom';


const PrivacyPolicy = (Props) => {

  return (<>
      <section className="bg-light py-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 page-title">
                  <h1 className="h2 mb-0">Privacy Policy</h1>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                      <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                      <li className="breadcrumb-item active text-primary" aria-current="page">Privacy Policy</li>
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
                    <div className="col-lg-12 col-md-12">
                    <h5>Flipmarto privacy policy introduction</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.</p>
                    <h5 className="mt-5">What Information is collected through technology and by third-parties?</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsumis simply dummy text of the printing and typesetting industry.</p>
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.</p>
                    <h5 className="mt-5">Changes to Personally Identifiable Information</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumis simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release simply dummy text of the printing.</p>
                    <h5 className="mt-5">Our details Information</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                </div>
            </section>

        </div>
  </>);
}

export default PrivacyPolicy;
