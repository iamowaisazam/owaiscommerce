import React, { useEffect, useState,createContext } from 'react';
import firebase from './firebase';
import Loader from '../components/Loader';
export const MyContext = createContext();
const Context = (props) => {

const [auth,setAuth] = useState(false);
const [users,setUsers] = useState();
const [portfolios,setPortfolios] = useState(null);
const [packages,setPackages] = useState(null);
const [orders,setOrders] = useState(null);


const getUser = () => {
  firebase.auth.onAuthStateChanged(user => {
    if(user != null){
      firebase.db.collection("users").doc(user.uid).get().then( res => {
           let data = res.data();
        setAuth({
           profile:data,
           user:user
        });
       });
     }else{
       setAuth(user)
     } 
  });
}

const updateprofile = (res) => {
  if(auth != null){
    let data = {...auth.profile,...res};
    firebase.db.collection("users").doc(auth.user.uid).set(data).then( res =>{
      getUser();
    });
  }
}

const delUser = async (id) => {
  await firebase.db.collection("users").doc(id).delete().then(function() {
      let currentUser = firebase.auth.currentUser;
      currentUser.delete().then(function() {
      }).catch(function(error) {
      });
  });
}

const login = (email,password) => {
  return firebase.auth.signInWithEmailAndPassword(email,password)
}

const register = (name,email,password) => {
  return firebase.auth.createUserWithEmailAndPassword(email,password)
}

//Profile
const createProfile = (obj) => {
  firebase.db.collection("users").doc(obj.id).set(obj).then( res =>{
    // getUser();
  });
}

const getUsers = async () => {
    await firebase.db.collection("users").onSnapshot(function(querySnapshot) {
       let fbusers = [];   
        querySnapshot.forEach(function(doc) {
          fbusers.push(doc.data());
        });
        setUsers(fbusers);
    });
}

// Profolios
const createPortfolio = (obj) => {
  firebase.db.collection("portfolios").doc().set(obj).then( res =>{
  });
}

const updatePortfolio = (obj) => {
  firebase.db.collection("portfolios").doc(obj.id).set(obj).then( res =>{
  });
}

const allPortfolios = async () => {
  await firebase.db.collection("portfolios").onSnapshot(function(querySnapshot) {
     let fbportfolios = [];   
      querySnapshot.forEach(function(doc) {
         let id = doc.id;
         let data = doc.data();
             data.id = id;

        fbportfolios.push(data);
      });
      setPortfolios(fbportfolios);   
 
  });

}

const deletePortfolio = async (id) => {
  await firebase.db.collection("portfolios").doc(id).delete().then(function() {
  });
}

// Packages
const createPackage = (obj) => {
  firebase.db.collection("packages").doc().set(obj).then( res =>{
  });
}

const updatePackage = (obj) => {
  firebase.db.collection("packages").doc(obj.id).set(obj).then( res =>{
  });
}

const allPackages = async () => {
  await firebase.db.collection("packages").onSnapshot(function(querySnapshot) {
     let fbpackages = [];   
      querySnapshot.forEach(function(doc) {
         let id = doc.id;
         let data = doc.data();
             data.id = id;
             fbpackages.push(data);
      });
      setPackages(fbpackages);   
  });
}

const deletePackage = async (id) => {
  await firebase.db.collection("packages").doc(id).delete().then(function() {
  });
}


//Orders
const createOrder = (obj) => {
  firebase.db.collection("orders").doc().set(obj).then( res =>{
  });
}

const updateOrder = (obj) => {
  firebase.db.collection("orders").doc(obj.id).set(obj).then( res =>{
  });
}

const allOrders = async () => {
  await firebase.db.collection("orders").onSnapshot(function(querySnapshot) {
     let fborders = [];   
      querySnapshot.forEach(function(doc) {
         let id = doc.id;
         let data = doc.data();
             data.id = id;
            //  data.date = new Date(data.date.toDate()).toDateString();
             fborders.push(data);
      });
      setOrders(fborders);   
  });
}

const deleteOrder = async (id) => {
  await firebase.db.collection("orders").doc(id).delete().then(function() {
  });
}

const userLogout = async () => {
   firebase.auth.signOut();
}

useEffect(() => {
  getUser();
  getUsers();
  allPortfolios();
  allPackages();
  allOrders();

},[]);

return <MyContext.Provider value={{
                              auth,
                              firebase,
                              users,
                              portfolios,
                              packages,
                              orders,
                              updateprofile,
                              login,register,
                              createProfile,
                              updatePortfolio,
                              deletePortfolio,
                              createPackage,
                              updatePackage,
                              deletePackage,
                              createOrder,
                              updateOrder,
                              deleteOrder,
                              delUser,
                              userLogout
                              }} > 
            { auth != false ? props.children :    <Loader/> }
       </MyContext.Provider>
}
export default Context;