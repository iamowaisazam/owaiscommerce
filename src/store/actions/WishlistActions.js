


export const get_wishlist = () => {
     
    let products = JSON.parse(localStorage.getItem("wishlist"));
    return {
        type:'get_wishlist',
        payload:products
    }
}


//Add To Cart Controller
export  const  addToWish  =  (data)  =>  {
    
      let cart = JSON.parse(localStorage.getItem("wishlist"));
      
    if(cart != null){

                cart.push({ 
                            id : data.id,
                            title : data.title,
                            quantity : data.quantity,
                            price : data.price,
                            thumbnail:data.thumbnail,
                });
                localStorage.setItem('wishlist',JSON.stringify(cart));
                    
     }else{
                let cart = [];
                cart.push({ 
                    id : data.id,
                    title : data.title,
                    quantity : data.quantity,
                    price : data.price,
                    thumbnail:data.thumbnail,
                });
                localStorage.setItem('wishlist',JSON.stringify(cart))
     }


            let products =  JSON.parse(localStorage.getItem("wishlist"));
     return  {
                 type:'get_wishlist',
                 payload:products
             }        
}


export const removeWishlist = (data) => {
    
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));

    let updateList = wishlist.filter((val,i,arr) => {

      if(val.id == data.id){
            }else{

               return val;
            }
       });

       localStorage.setItem('wishlist',JSON.stringify(updateList))


    return  {
        type:'get_wishlist',
        payload:updateList
    }  
  
}