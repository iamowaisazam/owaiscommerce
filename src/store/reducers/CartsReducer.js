import {getCart} from '../actions/CartActions'

const initState = {

   products:[ 

    ],
     subTotal:0,
     discount:0,
     total:10
  }
  
  const CartsReducer = (state = initState, action) => {
  
      switch(action.type){
          
        case 'get_cart':
            
        return {
                ...state, 
                 products:action.payload,
               }
    
         default:
  
          return state;
      }
      
  
  }
  export default CartsReducer;