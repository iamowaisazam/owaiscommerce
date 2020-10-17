import React,{useEffect,useState,useRef} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdVisibility } from "react-icons/md";
import {NavLink} from 'react-router-dom';


const UserModals = (Props) => {
  const {
    buttonLabel,
    className
  } = Props;


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

    useEffect(() => {
 
    },[]);

  return ( <>
      <div>
         <button className="mybtn3"  onClick={toggle}> <MdVisibility size={20} /> </button>
          <Modal size={'lg'} isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>User Details</ModalHeader>
            <ModalBody>
                  <div className="" >
                        <div className="form-row">
                                <div className="col-md-6 form-group">
                                <label>Display Name</label>
                                <input readOnly name="display_name" defaultValue={Props.data.display_name} type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Username</label>
                                <input readOnly name="name" defaultValue={Props.data.name} type="text" className="form-control" />
                                </div>
                          </div>
                          <div className="form-row">
                                <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input readOnly  defaultValue={Props.data.email} type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Password</label>
                                <input readOnly name="password" defaultValue={Props.data.password} type="text" className="form-control"  />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Role</label>
                                <input readOnly name="role" defaultValue={Props.data.role} type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Profession</label>
                                <input readOnly name="profession" defaultValue={Props.data.profession} type="text" className="form-control"  />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Phone</label>
                                <input readOnly name="phone" defaultValue={Props.data.phone} type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Birthday</label>
                                <input readOnly defaultValue={Props.data.birthday} name="birthday" type="text" className="form-control"   />
                                </div>
                          </div>
                          <div className="form-row">
                                <div className="col-md-12 form-group">
                                <label>Bio</label>
                                <textarea readOnly defaultValue={Props.data.bio} name="bio" className="form-control" ></textarea>
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Gender</label>
                                <input readOnly defaultValue={Props.data.gender} type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Country</label>
                                <input readOnly defaultValue={Props.data.country} name="country" type="text" className="form-control"  />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>City</label>
                                <input readOnly defaultValue={Props.data.city} name="city" type="text" className="form-control"  />
                                </div>
                                <div className="col-md-6 form-group">
                                <label>Postal Code</label>
                                <input readOnly defaultValue={Props.data.postal_code} name="postal_code" type="text" className="form-control"  />
                                </div>
                                <div className="col-md-12 form-group">
                                <label>Street Address</label>
                                <textarea readOnly defaultValue={Props.data.street_address} name="street_address" className="form-control"></textarea>
                                </div>
                         </div>
                  </div>  
            </ModalBody>
          </Modal>
      </div>
  </>);
}



export default UserModals;
