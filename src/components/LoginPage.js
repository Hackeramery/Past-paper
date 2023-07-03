import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for custom styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Prepare the login credentials
    const credentials = {
      email,
      password,
    };

    try {
      // Send a POST request to the login endpoint
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        const status = data.status;
        // console.log(status);
        if(status == 'admin'){
          navigate('/admin');
        }
        else{
          navigate('/dashboard');
        }
        
      } else {
        // Handle authentication failure
        // Display an error message or take appropriate action
        console.log('Authentication failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    }
  };

  return (
    <div class="parent">
      <div class="juu"><br/>HOPE AND JOY PRIMARY AND SECONDARY SCHOOL</div>
      <div class="chini"><br/>PAST PAPER SYSTEM</div>
      <div class="form-inner">
        <img class="logo" src="logo.png" id="pic" />
        <form onSubmit={handleLogin}>
          <div class="one">
            <input
              type="text"
              value={email}
              placeholder="User name"
              onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/><br/>
            <button id="login-btn">Log in</button>
            <a href="/signup" type="button" value="sign up" id="signup">sign up</a><br/>
            <br/> Forgotten password  
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
