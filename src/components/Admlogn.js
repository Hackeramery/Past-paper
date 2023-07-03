import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admlogn.css'; // Import the CSS file for custom styles

const Admnlogn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const admnlogn = async (e) => {
      e.preventDefault();
  
      // Prepare the login credentials
      const credentials = {
        username,
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
    <div class="admnlogn">
    <h2>Admin Login</h2>

    <form method="POST" onSubmit={admnlogn}>
        

        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username"
              onChange={(e) => setUsername(e.target.value)} required/>
        </div>

        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"
              onChange={(e) => setPassword(e.target.value)} required/>
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
    </form>
    </div>
);
};

export default Admnlogn;