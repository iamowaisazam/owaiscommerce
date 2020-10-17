import React,{useEffect,useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViewPackage = (Props) => {
  const {
    modal,
    setModal,
    buttonLabel,
    className
  } = Props;

  const toggle = () => setModal(!modal);
  const handle = (event) => {
        event.preventDefault();
        let profile = {
          id:Props.data.id,
          title  :  event.target.title.value,
          description  :  event.target.description.value,
          type  :  event.target.type.value,
          price  :  event.target.price.value,
        };
        Props.update(profile);
      toggle();
  }

    useEffect(() => {
     
      
    },[]);
  return ( <>
      <div>
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
          <form onSubmit={handle} >
            <ModalHeader toggle={toggle}>Portfolio Details</ModalHeader>
            <ModalBody>
                  <div className="" >
                        <div className="form-row">
                                <div className="col-md-12 form-group">
                                    <label>Title</label>
                                    <input required name="title"  defaultValue={Props.data.title} type="text" className="form-control" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label>Description</label>
                                    <textarea  name="description"  className="form-control" defaultValue={Props.data.description} ></textarea>
                                </div>
                                <div className="col-md-12 form-group">
                                        <label>Price</label>
                                        <input name="price" defaultValue={Props.data.price}  type="number" className="form-control" />
                                </div>
                                <div className="col-md-12 form-group">
                                        <label>Type</label>
                                        <input name="type"  type="text" defaultValue={Props.data.type}  className="form-control" />
                                </div>
                          </div>
                     </div>  
               </ModalBody>
               <ModalFooter>
                  <button className="mybtn2"  type="submit" > Update </button>
               </ModalFooter>
                    </form>
          </Modal>
      </div>
  </>);
}
export default ViewPackage;