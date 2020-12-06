import react from 'react';
import axios from 'axios';



export  const upload = async (file) => {

    let response;
    var formData = new FormData();
    formData.append("img", file);

    await axios({
      method: 'post',
      url: 'https://techmaniclab.com/public/api/file/upload',
      data:formData,
      },
      { 
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      }

    ).then( async res => {
        
      response = await  res.data.file;
    
    }).catch(e => {
        return   e.errors
    });

return response
}