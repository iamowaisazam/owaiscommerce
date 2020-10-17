import React,{useEffect,useContext,useState,useRef} from 'react';
import {MyContext} from '../config/Context';
import Helper  from '../config/Helper';
import {NavLink,useHistory} from 'react-router-dom';

// Assets
import cover from '../assets/img/cover.jpg';
import { storage } from 'firebase';
const User = () => {
  let history = useHistory();
   const [error,setError] = useState();
   const [success,setSuccess] = useState();
   const [state,setState] = useState({file:null});
   const file = useRef(null); 

const {auth,firebase,updateprofile,orders,delUser,userLogout} = useContext(MyContext);

    async function Handle(event){
        event.preventDefault();  
         
         let profile = {
           display_name  :  event.target.display_name.value,
           profession  :  event.target.profession.value,
           phone  :  event.target.phone.value,
           birthday  :  event.target.birthday.value,
           gender  :  event.target.gender.value,
           bio  :  event.target.bio.value,
           country  :  event.target.country.value,
           city  :  event.target.city.value,
           postal_code  :  event.target.postal_code.value,
           street_address  :  event.target.street_address.value,
         };
    
         if(event.target.img.files.length > 0){
            let img = event.target.img.files[0];
            const upload = firebase.storage.ref(`images/${img.name}`).put(img);
            upload.on("state_changed",() => {},(err) => {
               },() => {
                firebase.storage.ref("images").child(img.name).getDownloadURL().then(url =>{  
                    profile.img = url; 
                    file.current.value = null;
                    
                    updateprofile(profile);
                    
                });
             });

         }else{
          updateprofile(profile);
         }
     }

     const accountDelete = () =>{       
      delUser(auth.user.uid);
      history.push("/");
     }
     
     function logout(){
         userLogout();
        history.push("/");
      }

  return (<>

      <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="text-center mb-4">
              {auth.profile.img != null ? <img style={{height:'350px'}} src={auth.profile.img} className="profile-image w-100 avatar img-circle img-thumbnail" /> : <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="profile-image w-100 avatar img-circle img-thumbnail" /> }
            </div>        
              <ul className="list-group">
                <li className="list-group-item text-muted text-center ">{auth.profile.name} </li>
                <li className="list-group-item ">
                  <span className="d-block float-left"><strong>Gender</strong></span>
                  <span className="d-block float-right">{auth.profile.gender}</span> 
                </li>
                <li className="list-group-item ">
                  <span className="d-block float-left"><strong>Birthday</strong></span>
                   <span className="d-block float-right">{auth.profile.birthday}</span> 
                </li>
                <li className="list-group-item ">
                  <span className="d-block float-left"><strong>Phone</strong></span>
                   <span className="d-block float-right">{auth.profile.phone}</span> 
                </li>
              </ul>   
            </div>
          <div className="col-md-8 col-lg-8 py-2">
          <form onSubmit={Handle}  className="php-email-form">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="false">My Orders</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">Address</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Account</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={logout} data-toggle="tab" role="tab" href="" >Logout</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={accountDelete} data-toggle="tab" role="tab" href="" >Delete Account</a>
                    </li>
            </ul>
                  <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                      <div className="py-3" >
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Display Name</label>
                              <input defaultValue={auth.profile.display_name} name="display_name" type="text" className="form-control"   placeholder="Your Display Name" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Profession</label>
                              <input defaultValue={auth.profile.profession} name="profession" type="text" className="form-control"   placeholder="Your Profession" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Phone</label>
                              <input defaultValue={auth.profile.phone} name="phone" type="text" className="form-control"   placeholder="Phone" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Birthday</label>
                              <input defaultValue={auth.profile.birthday} name="birthday" type="date" className="form-control"   />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Gender</label>
                              <select defaultValue={auth.profile.gender} name="gender" className="form-control" >
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>File</label>
                              <input ref={file} name="img" type="file" className="form-control" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                             <label>Bio</label>
                              <textarea defaultValue={auth.profile.bio} name="bio" className="form-control" ></textarea>
                            </div>
                          </div> 
                        </div>
                    </div>
                    <div className="tab-pane fade" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                    <div className="py-3" >
                          <div className="table-responsive" >
                            <table className="table">
                                <thead>
                                  <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Package</th>
                                      <th scope="col">Price</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  { 
                                    orders != null ?
                                    orders.map((val,i,arr) => {
                                      if(auth.user.email == val.email){
                                        return <tr key={i}  >
                                                <td>{i}</td>
                                                <td>{val.package} </td>
                                                <td>{val.price}</td>
                                                <td>{val.status}</td>
                                                <td>{ Helper.dateFormat(val.date) }</td>
                                              </tr> 
                                          }
                                      })  
                                           :''
                                   }
                                </tbody>
                              </table>
                           </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                    <div className="py-3" >
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Country</label>
                              <input defaultValue={auth.profile.country} name="country" type="text" className="form-control" placeholder="Your Country" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>City</label>
                              <input defaultValue={auth.profile.city} name="city" type="text" className="form-control"   placeholder="Your City" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Postal Code</label>
                              <input defaultValue={auth.profile.postal_code} name="postal_code" type="text" className="form-control"   placeholder="Your Postal Code" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Street Address</label>
                              <textarea defaultValue={auth.profile.street_address} name="street_address" className="form-control"></textarea>
                            </div>
                          </div> 
                        </div>
                    </div>
                    <div className="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <div className="py-3" >
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Username</label>
                              <input readOnly defaultValue={auth.profile.name} name="username" type="text" className="form-control" placeholder="Your Username" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Email</label>
                              <input readOnly defaultValue={auth.profile.email} name="email" type="text" className="form-control"  placeholder="Your Email" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Email Verification </label>
                            <input readOnly name="status" type="text" className="form-control" value={auth.user.emailVerified}   placeholder="Your status" />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Role</label>
                            <input readOnly value={auth.profile.role}  name="role" type="text" className="form-control"  />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                            <label>Joined Date</label>
                            <input readOnly value={auth.user.metadata.creationTime}  name="joined_date" type="text" className="form-control"  />
                            </div>
                          </div>
                        </div>
                    </div>
                 </div>
                    <div className="text-center">
                            <button className="mybtn2 active" type="submit">Update</button>
                    </div>
                  </form>
              </div>
         </div>
  </>);
}

export default User;
