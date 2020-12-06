
class Helper{

    constructor(){   
    }

    dateFormat(id){      
     return  new Date(id.toDate()).toDateString(); 
    }

    find(array,id){  
      let data = array.find(x => x.id === id );
      return  data;
    }

    whereNot(array,key,value){  
        let data = [];
        array.map((val,i,arr) => {
            if(val[key] != value){
                data.push(val)
            }
        });
        return  data;
      }

    where(array,key,value){  
        let data = [];
        array.map((val,i,arr) => {
            if(val[key] == value){
                data.push(val)
            }
        });
        return  data;
      }


}

export default new Helper ();

 

  