import React,{useState,useContext,useEffect} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {Login as signin} from '.././store/actions/AuthActions';
// Components
import Loader  from '../components/ui/Backdrop'

const Login = (Props) => {

  const dispatch =  useDispatch();
  const auth = useSelector( response => response.AuthReducer.user);
  const errors = useSelector( response => response.AuthReducer.error);
  let success = useSelector( response => response.AuthReducer.success);
  const loading = useSelector( response => response.AuthReducer.loading);

 
      //  const auth = null;
        let history = useHistory();
      
        async function Handle(event){

          event.preventDefault();
          dispatch({
            type:'auth_errors',
            payload:null,
            error:null,
            success:null,
            loading:true
         }); 

        
          let obj = {
            email:event.target.email.value,
            password:event.target.password.value
          }

              dispatch(signin(obj));
              

        }

      useEffect(() => {


        
      })

  return (<>
      
    { 
      auth != null ?  history.push("/"):
      <>
      <Loader toggle={loading} />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 col-sm-11">
              <div className="shadow p-6 login bg-white">
                <div className="store-name">flipmarto</div>
                {  errors != null ?
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {errors}
                  </div> : ''
                }
                <form onSubmit={Handle} method="post"   >
                    <div className="form-group">
                      <input  type="text" name="email" className="form-control" placeholder="User name" required  />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required  />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group mt-4 mb-5">
                      <div className="remember-checkbox d-flex align-items-center justify-content-between">
                        <div className="checkbox">
                          <input type="checkbox" id="check2" name="check2" />
                          <label htmlFor="check2">Remember me</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div> 
                    <button type="submit" className="btn btn-primary btn-block">Login Now </button>
                </form>
                <div className="d-flex align-items-center text-center justify-content-center mt-4">
                  <span className="text-muted mr-1">Don't have an account?</span>
                  <NavLink to="/register">Sign Up</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      </> 
         }
    
  </>);
}

export default Login;