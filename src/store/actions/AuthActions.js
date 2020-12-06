import axios from 'axios';
import {upload} from '../types';



//Get Auth Controller
export const getAuth = ()  => async (dispatch) =>  {
    
    try {

         let result = await axios.post('https://techmaniclab.com/public/api/auth');

         dispatch({
            type:'auth',
            payload:result.data,
            error:null,
            success:false,
          }); 
            
      } catch (error) {

        localStorage.removeItem('token');

      }

}


//Login Controller
export  const  Login  = (data)  => async (dispatch) =>   {
   
    try {

        let result = await axios.post('https://techmaniclab.com/public/api/login',data);

        dispatch({
            type:'login',
            payload:result.data,
            error:null,
            success:null,
        }); 

        dispatch({
          type:'success',
          message:"Your Are Now Login"
        }); 

    } catch (error) {
        
        dispatch({
          type:'auth_errors',
          payload:null,
          error:"Username Or Passowrd Wrong",
          success:null,
        }); 
    }
     
        
}


//Register Controller
export  const  Register  =  (data)  => async (dispatch) =>   {

    try {

        let result = await axios({
            method:"post",
            url:'https://techmaniclab.com/public/api/register',
            data:data
           });
           
        dispatch({
            type:'register',
            payload:null,
            error:null,
            success:true,
        }); 
 
        dispatch({
          type:'success',
          message:"Your Are Now Registered"
        }); 
    

     } catch (error) {

        dispatch({
          type:'auth_errors',
          payload:null,
          error:error.response.data.errors,
          success:null,
        }); 
     
     }

}


//Register Controller
export  const  AuthUpdate  =  (data)  => async (dispatch) =>   {

   
      // console.log(result);
              
          try {
                  
                  if(data.photo.length > 0){
                      let img = data.photo[0];
                      let url = await upload(img);
                      data.photo = url;
                  }

                  let result = await axios({
                      method:"post",
                      url:'https://techmaniclab.com/public/api/profile/update',
                      data:data
                    });
                
                  
                  dispatch({
                      type:'AuthUpdate',
                      error:null,
                      success:true,
                  }); 
    
            } catch (error) {
     
            }

}

//Register Controller
export  const  Logout  =  ()  => async (dispatch) =>   {

      try {
            axios({
                method:'post',
                url: 'https://techmaniclab.com/public/api/logout',
                });

               
            dispatch({
                  type:'logout',
              }); 

      } catch (error) {
 
        
      }

}



