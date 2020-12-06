const initState = {

    products:[
                  {   id:1,
                      title : "Product 1",
                      excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                      quantity:10,
                      price:30.00,
                      sell:20.00,
                      discount: (30 - 20) / 30 * 100 ,
                      thumbnail:"p1.jpg",
                      hover:"p1.jpg",
                      categories:[1,2,4,5],
                      rate:5
                  },
                  {   id:2,
                    title : "Product 2",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    quantity:10,
                    price:10.00,
                    sell:20.00,
                    discount: (30 - 20) / 30 * 100 ,
                    thumbnail:"p2.jpg",
                    hover:"p2.jpg",
                    categories:[1,2,4,5],
                    rate:5
                },
                {   id:3,
                    title : "Product 3",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    quantity:10,
                    price:10.00,
                    sell:20.00,
                    discount: (30 - 20) / 30 * 100 ,
                    thumbnail:"p3.jpg",
                    hover:"p3.jpg",
                    categories:[1,2,4,5],
                    rate:5
                },
                {   id:4,
                    title : "Product 4",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    quantity:10,
                    price:10.00,
                    sell:20.00,
                    discount: (30 - 20) / 30 * 100 ,
                    thumbnail:"p4.jpg",
                    hover:"p4.jpg",
                    categories:[1,2,4,5],
                    rate:5
                },
                {   id:5,
                    title : "Product 5",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    quantity:10,
                    price:10.00,
                    sell:20.00,
                    discount: (30 - 20) / 30 * 100 ,
                    thumbnail:"p5.jpg",
                    hover:"p5.jpg",
                    categories:[1,2,4,5],
                    rate:5
                },
                {   id:6,
                    title : "Product 6",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    quantity:10,
                    price:10.00,
                    sell:20.00,
                    discount: (30 - 20) / 30 * 100 ,
                    thumbnail:"p6.jpg",
                    hover:"p6.jpg",
                    categories:[1,2,4,5],
                    rate:5
                },
          ]
  }
  
  const ProductsReducer = (state = initState, action) => {
  
      switch(action.type){
          
           case 'get_product':
              let id = parseInt(action.id);

              return {...state, product: state.products.find( product => product.id == id )};
  
          default:
  
          return state;
      }
  
  }
  export default ProductsReducer;