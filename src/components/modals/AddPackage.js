import React,{useEffect,useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddPackage = (Props) => {
  const {
    modal,
    setModal,
    className
  } = Props;
   
  const toggle = () => setModal(!modal);
  const handle =  (event) => {
        event.preventDefault();  
        let profile = {
          title  :  event.target.title.value,
          description  :  event.target.description.value,
          price  :  event.target.price.value,
          type  :  event.target.type.value,
        };
      Props.create(profile);
      toggle();
  }


    useEffect(() => {
 

    },[]);
  return ( <>
      <div>
        
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
            <form onSubmit={handle} >
              <ModalHeader toggle={toggle}>Add Package</ModalHeader>
              <ModalBody>
                    <div className="" >
                          <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <label>Title</label>
                                        <input required   name="title"  type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Description</label>
                                        <textarea name="description" className="form-control"></textarea>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Price</label>
                                        <input name="price"  type="number" className="form-control" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Type</label>
                                        <input name="type"  type="text" defaultValue="month"  className="form-control" />
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



export default AddPackage;
