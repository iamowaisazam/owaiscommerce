import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Logout as out } from '../../../store/actions/AuthActions';

const Navigation = () => {

   const dispatch = useDispatch();
  function logout(){
       
    dispatch(out());

   }




  return (
        <div className="col-lg-12">
              <div className="dashboard_menu">
                <ul className="nav nav-tabs border-0 " role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">
                      Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false">
                      My Orders</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="account-detail-tab" data-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true">
                      Support</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logout} >Logout</a>
                  </li>
                </ul>
              </div>
        </div>
    )
}

export default Navigation
