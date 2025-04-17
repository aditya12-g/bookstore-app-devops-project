import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Books from './components/Books';
import Orders from './components/Orders';

function App() {
  return (
    <div>
      <h1>📚 Bookstore App</h1>
      <SignUp />
      <Login />
      <Books />
      <Orders />
    </div>
  );
}

export default App;
