import React from 'react';
import axios from 'axios';

const SignUp = () => {
  const handleSignUp = async () => {
    await axios.post('http://localhost:3001/signup', { name: 'test' });
    alert('Signed up!');
  };

  return <button onClick={handleSignUp}>Sign Up</button>;
};

export default SignUp;
