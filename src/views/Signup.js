import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = () => {
    // Here you can implement your signup logic, e.g., send a request to your backend API
    // For simplicity, let's just check if all fields are filled and passwords match
    axios.post('http://alok760.in:3001/auth/signup', {
      username, password, name, "type": "freelancer", "age": "14",
    }).then((res) =>{
      if(res.data.token){
        setLoggedIn(true)
        setCookie('userlogin', res.data.token);
      } else{
        alert('Credentials inccorrect!');
      }
      
    }).catch(err => console.error(`Error: ${err}`));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        {signedUp ? (
          <h1 style={{ textAlign: 'center' }}>Welcome, {username}!</h1>
        ) : (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
            <br />
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
            <br />
            <button onClick={handleSignup} style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
