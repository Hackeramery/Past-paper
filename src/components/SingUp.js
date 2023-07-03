import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SingUp.css'; // Import the CSS file for custom styles

const Admnlogn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const admnlogn = async (e) => {
      e.preventDefault();
  
      // Prepare the login credentials
      const credentials = {
        name,
        email,
        password,
      };
  
      try {
        // Send a POST request to the login endpoint
        const response = await fetch('http://127.0.0.1:8000/api/Admnlogn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
  
        if (response.ok) {
          // Authentication successful
          // Navigate to a different page (e.g., '/dashboard')
          navigate('/Admin');
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
    <div class="signup">
    <h2>Sign Up</h2>

    <form method="POST" onSubmit={admnlogn}>
        

        <div>
            <label for="name">Username</label>
            <input type="text" name="name" id="username"
              onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email"
              onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"
              onChange={(e) => setPassword(e.target.value)} required/>
        </div>

        <div class="action-btns">
            <a href='/' type="submit">Login</a>
            <button type="submit">Sign Up</button>
        </div>
    </form>
    </div>
);
};

export default Admnlogn;