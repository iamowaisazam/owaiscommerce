import React,{useEffect,useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Helper  from '../../config/Helper';

const ViewOrder = (Props) => {
  const {
    modal,
    setModal,
    buttonLabel,
    className
  } = Props;

  const toggle = () => setModal(!modal);
  const handle = (event) => {
    event.preventDefault();

      
        let id = event.target.id.value;
        let email = event.target.email.value;
        let packageSingle = Helper.find(Props.package,id);
         
        let data = {
          id:Props.data.id,
          package:packageSingle.title,
          price:packageSingle.price,
          packageId : id,
          email:email,
          date:new Date(),
          status:event.target.status.value,
         }
        
        Props.update(data);

     toggle();
  }
    useEffect(() => {
     
    },[]);
  return ( <>
      <div>
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
          <form onSubmit={handle} >
            <ModalHeader toggle={toggle}>Order Details</ModalHeader>
            <ModalBody>
            <div className="" >
                       <div className="form-row">
                               <div className="col-md-12 form-group">
                                    <label>Package </label>
                                    <select defaultValue={Props.data.package} className="form-control" name="id" >
                                    {
                                        Props.package != null ?
                                        Props.package.map((val,i,arr) => {
                                        return <option key={i} value={val.id} >{val.title}</option>  
                                            }) : ''
                                      }
                                    </select>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label>User's Email  </label>
                                    <select defaultValue={Props.data.email} className="form-control" name="email" >
                                    {
                                        Props.user != null ?
                                        Props.user.map((val,i,arr) => {
                                        return <option key={i} value={val.email}  >{val.email}</option>  
                                            }) : ''
                                      }
                                    </select>
                              </div>
                              <div className="col-md-12 form-group">
                                    <label>Order Status</label>
                                    <select defaultValue ={Props.data.status} className="form-control" name="status" >
                                       <option value='approved' >Approved</option>
                                       <option value='pending' >Pending</option>
                                       <option value='completed' >Completed</option>
                                       <option value='canceled' >Canceled</option>
                                    </select>
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
export default ViewOrder;