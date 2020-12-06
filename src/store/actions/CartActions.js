export const getCart = () => {
     
    let products = JSON.parse(localStorage.getItem("cart"));
    return {
        type:'get_cart',
        payload:products
    }
}


//Add To Cart Controller
export  const  addToCart  =  (data)  =>  {
    
            let cart = JSON.parse(localStorage.getItem("cart"));
                
            if(cart != null){


                        
                        let checkProductExist =  cart.find((val) => {  if(val.id == data.id){ return true  } } );
                        // console.log(checkProductExist);  
                        if(checkProductExist != undefined){

                            let updatecart = cart.filter((val,i,arr) => {

                                if(val.id == data.id){
                                        if(data.type == "r"){

                                            return  val.quantity  = 1 - data.quantity;

                                        }else if(data.type == 'm'){
                                           
                                            return  val.quantity  = val.quantity - data.quantity;
                                        
                                         }else{
                                               return  val.quantity  = val.quantity + data.quantity;
                                             }
                                    
                                    }else{

                                    return val
                                    }
                                });

                            localStorage.setItem('cart',JSON.stringify(updatecart));
             }else{

                    cart.push({ 
                            id : data.id,
                            title : data.title,
                            quantity : data.quantity,
                            price : data.price,
                            thumbnail:data.thumbnail,
                    });
                    localStorage.setItem('cart',JSON.stringify(cart));
             }

     }else{
                
                let cart = [];
                cart.push({ 
                    id : data.id,
                    title : data.title,
                    quantity : data.quantity,
                    price : data.price,
                    thumbnail:data.thumbnail,
                });
                localStorage.setItem('cart',JSON.stringify(cart))
        }

        let products =  JSON.parse(localStorage.getItem("cart"));
          
     return  {
                 type:'get_cart',
                 payload:products
             }        
    
             
}





export const cartDestory = () => {
   
   
   
    return {
        type:'remove_to_cart',
        data:{}
    }
}



