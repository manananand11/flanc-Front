import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const handleLogin = async () => {
    // Here you can implement your login logic, e.g., send a request to your backend API
    // For simplicity, let's just check if the username and password are not empty
    axios.post('https://api.alok760.in/auth/login', {
      username, password,
    }).then((res) =>{
      if(res.data.token){
        setLoggedIn(true)
        setCookie('userlogin', res.data.token);
      } else{
        alert('Credentials inccorrect!');
      }
      
    }).catch(err => console.error(`Error: ${err}`));
  };

  useEffect(()=>{
    if(cookies.userlogin){
        setLoggedIn(true);
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        {loggedIn ? (
          <h1 style={{ textAlign: 'center' }}>Welcome, {username}!</h1>
        ) : (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
            <br />
            <button onClick={handleLogin} style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
