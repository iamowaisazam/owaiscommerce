import React,{useState,useContext,useEffect} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {MyContext} from '../config/Context';

const Login = (Props) => {
  const {login,auth} = useContext(MyContext);

  let history = useHistory();
  const [error,setError] = useState();
  const [success,setSuccess] = useState();


  async function Handle(event){
    event.preventDefault();
  
    let obj = {
      email:event.target.email.value,
      password:event.target.password.value
     }

     try{
          let result = await login(obj.email,obj.password);
          setSuccess('You Are Login');
          setError(null);
          history.push("/");
     }catch(res){
          setSuccess(null)
          setError(res.message);
     }

   }

  return (<>

    { 
      auth != null ?  history.push("/"):
      <>
            <section  className="contact section-bg">
              <div className="container" >
                <div className="row">
                  <div className="mx-auto col-lg-8">
                  { error != null && 
                      <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Error!</strong> {error}
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    }
                    { success != null && 
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Success!</strong> {success}
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    }

                  <form onSubmit={Handle}  className="php-email-form">
                      <div className="form-row">
                        <div className="col-md-12 form-group">
                        <label>Email</label>
                          <input name="email" type="email" className="form-control"   placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12 form-group">
                        <label>Password</label>
                          <input name="password" type="password" className="form-control"  placeholder="Your Password" />
                        </div>
                      </div>   
                      <div className="text-center">
                        <button type="submit">Signin</button>
                      </div>
                      <div className="pt-3 text-center">
                        <NavLink to="/register" className="" >If You Dont Have Account ? </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </> 
         }
    </>);
}

export default Login;
