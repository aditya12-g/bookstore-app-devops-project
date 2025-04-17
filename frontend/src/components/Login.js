import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleLogin = async () => {
    const res = await axios.post('http://localhost:3001/login', { user: 'test' });
    alert(`Logged in! Token: ${res.data.token}`);
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
