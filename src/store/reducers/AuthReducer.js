import axios from 'axios'
import swal from 'sweetalert';
import react from 'react'

const initState = {
       user : null,
       error:null,
       success:null,
       loading:false
    };


const AuthReducer = (state = initState, action) => {

    switch(action.type){
     
      

// Login Condition
         case 'login':

          localStorage.setItem('token',action.payload.token);  
          axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+action.payload.token
          }



        return {
                ...state, 
                user: action.payload.auth,
                error: action.error,
                loading:false
               }
         break


// Auth Condition
        case 'auth':

        return {
                ...state, 
                user: action.payload,
                error: action.error,
                loading:false,
                success:false
               }
         break


// Register Condition
         case 'register':

            return {
                    ...state, 
                    user: action.payload,
                    error: action.error,
                    success:action.success,
                    loading:false
                   }
         break



         // Register Condition
         case 'AuthUpdate':

            return {
                    ...state, 
                    error: null,
                    success:true,
                    loading:false,
                   }
         break

        

//Response And Errors Handling
         case 'auth_errors':

            return {
                    ...state, 
                    error: action.error,
                    success: action.success,
                    loading:action.loading
                   }
         break


//Logout
         case 'logout':
                  
          localStorage.removeItem('token');
          
            return {
                    ...state, 
                    error: null,
                    success: null,
                    loading:false,
                    user:null
                   }
         break



         default:

        return state;
    }



}

export default AuthReducer;