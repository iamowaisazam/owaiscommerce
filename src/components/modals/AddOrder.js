import React,{useEffect,useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Helper  from '../../config/Helper';

const AddOrder = (Props) => {
  const {
    modal,
    setModal,
    className
  } = Props;
   
  const toggle = () => setModal(!modal);
  const handle =  (event) => {
        event.preventDefault();

        let id = event.target.id.value;
        let email = event.target.email.value;
        let packageSingle = Helper.find(Props.package,id);

        let data = {
          package:packageSingle.title,
          price:packageSingle.price,
          packageId : id,
          email:email,
          date:new Date(),
          status:event.target.status.value,
         }
              
      Props.create(data);
      toggle();
  }

    useEffect(() => { 

    },[]);
  return ( <>
      <div>
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
            <form onSubmit={handle} >
              <ModalHeader toggle={toggle}>Add Order</ModalHeader>
              <ModalBody>
                   <div className="" >
                       <div className="form-row">
                               <div className="col-md-12 form-group">
                                    <label>Package</label>
                                    <select className="form-control" name="id" >
                                    {
                                        Props.package != null ?
                                        Props.package.map((val,i,arr) => {
                                        return <option key={i} value={val.id} >{val.title}</option>  
                                            }) : ''
                                      }
                                    </select>
                                </div>
                                
                                <div className="col-md-12 form-group">
                                    <label>User's Email</label>
                                    <select className="form-control" name="email" >
                                    {
                                        Props.user != null ?
                                        Props.user.map((val,i,arr) => {
                                        return <option key={i} data-tag={i}  value={val.email}  >{val.email}</option>  
                                            }) : ''
                                      }
                                    </select>
                                </div>

                                <div className="col-md-12 form-group">
                                    <label>Order Status</label>
                                    <select className="form-control" name="status" >
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
                    <button className="mybtn2"  type="submit" > Create </button>
                    </ModalFooter>
                </form>
          </Modal>
      </div>
  </>);
}



export default AddOrder;
