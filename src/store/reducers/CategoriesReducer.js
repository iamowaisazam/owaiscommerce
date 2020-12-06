const initState = {

  categories:[
                {   id:1,
                    title : "Mens Fashion",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"07.jpg",
                    banner:"01.jpg",
                },
                {   id:2,
                    title : "Accessories",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"08.jpg",
                    banner:"02.jpg",
                },
                {   id:3,
                    title : "Kids Collection",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"09.jpg",
                    banner:"03.jpg",
                },
                {   id:4,
                    title : "Handbags",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"10.jpg",
                    banner:"06.jpg",
                },
                {   id:5,
                    title : "Shoes",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"11.jpg",
                    banner:"07.jpg",
                },
                {   id:6,
                    title : "Womens Fashion",
                    excerpt : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    thumbnail:"side-banner.jpg",
                    banner:"08.jpg",
                }
        ]
}

const CategoriesReducer = (state = initState, action) => {

    switch(action.type){
        
         case 'Login_User':

         return {users:[action.payload,...state.users]};


        default:


        return state;
    }


}

export default CategoriesReducer;