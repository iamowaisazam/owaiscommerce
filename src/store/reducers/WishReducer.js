

const initState = {

   products:[ 

    ],
  }
  
  const WishReducer = (state = initState, action) => {
  
      switch(action.type){
          
        case 'get_wishlist':
            
        return {
                ...state, 
                 products:action.payload,
               }
    
         default:
  
          return state;
      }
      
  
  }
  export default WishReducer;