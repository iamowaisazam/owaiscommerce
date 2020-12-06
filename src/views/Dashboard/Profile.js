import React,{useEffect,useContext,useState,useRef} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {AuthUpdate,getAuth} from '../../store/actions/AuthActions';


//Components
import Navigation from './layout/Navigation';
import Loader  from '../../components/ui/Backdrop';

const Profile = () => {

     const dispatch =  useDispatch();
     let history = useHistory();

    const auth = useSelector( response => response.AuthReducer.user);
    //const auth = true;

    const errors = useSelector( response => response.AuthReducer.error);
    let success = useSelector( response => response.AuthReducer.success);
    let loading = useSelector( response => response.AuthReducer.loading);

    //Ref
    const photo = useRef(null); 

 async function Handle(event){

  event.preventDefault();

          dispatch({
              type:'auth_errors',
              error:null,
              success:null,
              loading:true
          }); 

          let profile = {
              nick_name  :  event.target.nick_name.value,
              profession  :  event.target.profession.value,
              mobile  :  event.target.mobile.value,
              birthday  :  event.target.birthday.value,
              gender  :  event.target.gender.value,
              bio  :  event.target.bio.value,
              photo : event.target.photo.files,
          };

        
         dispatch(AuthUpdate(profile));
  }
    
  useEffect( () => {

    if(success == true){
    
        dispatch(getAuth());
    
    }

  },[success]);
  return (<>
             { auth == null  ?  history.push("/") : 
          <>
<section className="dashboard-page">
        <div className="banner" > 
          <section className="bg-light py-6">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 page-title">
                    <h1 className="h2 mb-0">My Account</h1>
                  </div>
                  <div className="col-md-6 mt-3 mt-md-0">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                        <li className="breadcrumb-item"><NavLink className="link-title" to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active text-primary" aria-current="page">Account</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                {/* / .row */}
              </div>
              {/* / .container */}
          </section>

        </div>
        <div className="container-lg">
          <div className="row">
             <Loader toggle={loading} />
              <Navigation />
              <div className="col-lg-12">
                <div className="tab-content dashboard_content">
                  <div className="tab-pane fade show active " id="profile" role="tabpanel" aria-labelledby="profile">
                    <div className="card border-0">
                      <div className="card-body pb-3">
                        <form onSubmit={Handle} >
                          <div className="row"> 

                              <div className="col-md-6 form-group">
                                <label>Username</label>
                                <input readOnly defaultValue={auth.name}  type="text" className="form-control"   placeholder="Username" />
                              </div>
                
                              <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input readOnly defaultValue={auth.email}  type="text" className="form-control"   placeholder="Your Email" />
                              </div>
                                                                             
                              <div className="col-md-6 form-group">
                                <label>Name</label>
                                <input defaultValue={auth.profile.nick_name} name="nick_name" type="text" className="form-control"   placeholder="Name" />
                              </div>

                              <div className="col-md-6 form-group">
                                <label>Profession</label>
                                <input defaultValue={auth.profile.profession} name="profession" type="text" className="form-control"   placeholder="Profession" />
                              </div>  

                              <div className="col-md-6 form-group">
                              <label>Phone</label>
                                <input defaultValue={auth.profile.mobile} name="mobile" type="text" className="form-control"   placeholder="Phone" />
                              </div>

                              <div className="col-md-6 form-group">
                              <label>Birthday</label>
                                <input defaultValue={auth.profile.birthday} name="birthday" type="date" className="form-control"   />
                              </div>

                              <div className="col-md-6 form-group">
                              <label>Gender</label>
                                <select defaultValue={auth.profile.gender} name="gender" className="form-control" >
                                  <option  value="male" >Male</option>
                                  <option  value="female" >Female</option>
                                </select>
                              </div>

                              <div className="col-md-6 form-group">
                              <label>File</label>
                                <input  multiple ref={photo} name="photo" type="file" className="form-control" />
                              </div>

                              <div className="col-md-12 form-group">
                                <label>Bio</label>
                                <textarea defaultValue={auth.profile.bio} name="bio" className="form-control" ></textarea>
                              </div>

                              <div className="col-md-12">
                                <button type="submit" className="btn btn-primary" name="submit" value="Submit">Save</button>
                              </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

         </>
       }
 </>)}
export default Profile;