
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // and so on ...
};

const initState = {
      data:null
    };


const AlertReducer = (state = initState, action) => {

    switch(action.type){
     
// Success Condition
         case 'success':

     

           toast.success(action.message, options);
     

          return state
         break


// Auth Condition
        case 'warning':
        
            toast.warning(action.message, options);


    
        return state
         break


// Register Condition
         case 'danger':

            toast.danger(action.message, options);
        
          return state
         break



//Response And Errors Handling
         case 'info':

            toast.info(action.message, options);

        
          return state
         break


         default:
        return state;
    }




}

export default AlertReducer;