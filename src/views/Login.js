import React from 'react';


// Components

import Bread from '../components/Bread';
import LoginComponent from '../components/Login';

const Login = () => {
  return (<>
      <Bread title="SignIn Form" des="We are team of talanted designers making Web and Native Apps" />
      <LoginComponent />
  </>);
}

export default Login;
