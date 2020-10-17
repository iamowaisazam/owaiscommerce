import React,{useEffect,useState,useRef} from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdCreate } from "react-icons/md";
import {NavLink} from 'react-router-dom';


const AddPortfolio = (Props) => {
  const {
    modal,
    setModal,
    className
  } = Props;
  
  const [text,setText] = useState('');
  const [slug,setSlug] = useState('');

  const file = useRef(null); 
  const toggle = () => setModal(!modal);

  const onTitle =  (event) => {
      setSlug(slugify(event.target.value));
    }

    function slugify(string) {
      return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }

  const handle =  (event) => {
        event.preventDefault();  
        let profile = {
          title  :  event.target.title.value,
          description  :  event.target.description.value,
          slug  :  event.target.slug.value,
          excerpt  :  event.target.excerpt.value,
        };

        if(event.target.thumbnail.files.length > 0){
          let img = event.target.thumbnail.files[0];
          const upload = Props.firebase.storage.ref(`images/${img.name}`).put(img);
          upload.on("state_changed",() => {},(err) => {
            },() => {
              Props.firebase.storage.ref("images").child(img.name).getDownloadURL().then(url =>{  
                  profile.img = url; 
                  Props.create(profile);
                  // file.current.value = null;
              });
          });
      }else{
     
        Props.create(profile);
      }

      toggle();
  }


    useEffect(() => {
 

    },[]);
  return ( <>
      <div>
        
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
            <form onSubmit={handle} >
              <ModalHeader toggle={toggle}>Add Portfolio</ModalHeader>
              <ModalBody>
                    <div className="" >
                          <div className="form-row">
                                 <div className="col-md-12 form-group">
                                    <label>Title</label>
                                    <input required onChange={onTitle}  name="title"  type="text" className="form-control" />
                                  </div>
                                  <div className="col-md-12 form-group">
                                    <label>Slug</label>
                                    <input readOnly value={slug}  name="slug"  type="text" className="form-control" />
                                  </div>
                                  <div className="col-md-12 form-group">
                                    <label>Description</label>
                                    <textarea name="description" className="form-control"></textarea>
                                  </div>
                                  <div className="col-md-12 form-group">
                                    <label>Thumbnail</label>
                                    <input ref={file}  name="thumbnail"  type="file" className="form-control" />
                                  </div>
                                  <div className="col-md-12 form-group">
                                    <label>Excerpt</label>
                                    <textarea   name="excerpt" className="form-control"></textarea>
                                  </div>
                                  <div>
                                  </div>
                            </div>
                    </div>  
                    </ModalBody>
                    <ModalFooter>
                    <button className="mybtn2"  type="submit" > Create </button>
                    </ModalFooter>
                    </form>
          </Modal>
          
      </div>
  </>);
}



export default AddPortfolio;
