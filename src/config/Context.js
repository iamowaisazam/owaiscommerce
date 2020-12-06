import React, { useEffect, useState,createContext } from 'react';
import axios from 'axios';
import firebase from './firebase';
import Loader from '../components/Loader';
import api,{_products,_categories} from '../config/Api';
// import toaster from 'toaster';

export const MyContext = createContext();
const Context = (props) => {


//Products
const [auth,setAuth] = useState(false);
const [users,setUsers] = useState(false);
const [products,setProducts] = useState(false);
const [categories,setCategories] = useState(false);





const getUser = () => { 

    if( localStorage.getItem('token') != null){

        let token = localStorage.getItem('token');
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+token
        }

        axios({
          method: 'post',
          url: 'https://techmaniclab.com/public/api/auth',
          }).then( res => {
             
            let data = {...auth,
              profile:res.data.auth
            };

             setAuth(data);

            }).catch(e => {
             console.log(e);
            });

    }else{
      setAuth(null);
    }


}

const updateprofile = (res) => {
      
    let data = res;
    axios({
        method: 'post',
        url: 'https://techmaniclab.com/public/api/profile/update',
        data:data,
        }).then( res => {
            
            getUser();
           
      
          }).catch(e => {
      
             console.log(e);
     });
    
}

const upload = async (file) => {

      let response;
      var formData = new FormData();
      formData.append("img", file);

      await axios({
        method: 'post',
        url: 'https://techmaniclab.com/public/api/file/upload',
        data:formData,
        },
        { 
          headers: {
          'Content-Type': 'multipart/form-data'
           }
        }

       ).then( async res => {
          
         response = await  res.data.file;
      
       }).catch(e => {
          return   e.errors
      });

  return response
}

const delUser = async (id) => {

  await firebase.db.collection("users").doc(id).delete().then(function() {
      let currentUser = firebase.auth.currentUser;
      currentUser.delete().then(function() {
      }).catch(function(error) {
      });
  });

}

const login = (email,password) => {

      let obj = {
        email:email,
        password:password
      }

    axios({
    method: 'post',
    url: 'https://techmaniclab.com/public/api/login',
     data:obj
    }).then( res => {

         localStorage.setItem('token',res.data.token);
         getUser();
         
    }).catch(e => {

      console.log(e);
    });

}


const  register = async (data) => {

     let response = null

          await axios({
                method: 'post',
                url: 'https://techmaniclab.com/public/api/register',
                data:data
                }).then( async res => {
                      
                 response = 'success';
        
               }).catch(async e => {
               response =  await e.response.data.errors;
          });

   return response; 
}


const getUsers = async () => {

     axios({
      method: 'get',
      url: 'https://techmaniclab.com/public/api/users/all',
      }).then( res => {
      
         setUsers(res.data.users);
      }).catch(e => {
    
        console.log(e);
      });

}

const userLogout = async () => {
   
    axios({
        method:'post',
        url: 'https://techmaniclab.com/public/api/logout',
        }).then( res => {
             setAuth(null);
        }).catch(e => {      
            console.log(e);
    });

    localStorage.removeItem('token');
}




useEffect(() => {
   getUser();
  getUsers();

  setProducts(_products);
  setCategories(_categories)

},[]);

return <MyContext.Provider value={{
                            products,
                            upload,
                              auth,
                              users,
                              updateprofile,
                              login,register,
                              delUser,
                              userLogout
                              }} > 

       { auth != false ? props.children :    <Loader/> }
   </MyContext.Provider>
}

export default Context;