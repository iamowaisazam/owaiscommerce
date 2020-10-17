import React,{useEffect,useContext,useState} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {MyContext} from '../config/Context';
import {Spinner} from 'reactstrap';

// Images
import cover from '../assets/img/cover.jpg';

// Components
import Bread from '../components/Bread';
import UserComponents from './User';
import AdminComponents from './Admin';
import { storage } from 'firebase';
import Helper  from '../config/Helper';

const Profile = () => {

  let history = useHistory();
  const [error,setError] = useState();
  const [success,setSuccess] = useState();
  const [state,setState] = useState({file:null});

  const {auth,firebase,updateprofile,packages} = useContext(MyContext);

  // useEffect( () => {

  // });

  return (<>
             { auth == null ?  history.push("/"): 
              <>
              <Bread title="My Profile" des="" />
                <section className="profile py-5">
                  <div className="profile-container  pt-4 bootstrap snippet">
                    {auth.profile.role == 'admin' ?  <AdminComponents /> : <UserComponents />  }
                  </div>
                </section>
              </>
              }
      </>)
}
export default Profile;
