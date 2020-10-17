import React,{ useEffect,useState,useContext} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {MyContext} from '../config/Context';

const  Register =  (Props) => {
  
  let history = useHistory();
  const [error,setError] = useState();
  const [success,setSuccess] = useState();
  const {auth,register,createProfile} = useContext(MyContext);

  async function Handle(event){
      event.preventDefault();
      
      let obj = {
        name:event.target.name.value,
        email:event.target.email.value,
        password:event.target.password.value,
        role:'user',
      }

      try{
       let result = await register(obj.name,obj.email,obj.password);
       obj.id = result.user.uid;
       await createProfile(obj);
       history.push("/");

      }catch(res){
          setSuccess(null);
          setError(res.message);
      }


   }

  return ( <>
           
           { auth != null ?  history.push("/"): 
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
                        <label>Name</label>
                          <input name="name" type="text" className="form-control"   placeholder="Your Name" />
                        </div>
                      </div>
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
                        <button  type="submit">SignUp</button>
                      </div>
                      <div className="pt-3 text-center">
                        <NavLink to="/login" className="" >If You Have Have Account ? </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
        </>} 
      
    </>);
}

export default Register;
