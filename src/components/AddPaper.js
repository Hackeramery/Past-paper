import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addppr.css';

const AddPaper = () => {
  const navigate = useNavigate();
  const [paperName, setPaperName] = useState('');
  const [paperType, setPaperType] = useState('');
  const [paperYear, setPaperYear] = useState('');
  const [paperFile, setPaperFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file and other form data
    const formData = new FormData();
    formData.append('name', paperName);
    formData.append('type', paperType);
    formData.append('year', paperYear);
    formData.append('file', paperFile);

    try {
      // Send a POST request to the endpoint
      const response = await fetch('http://127.0.0.1:8000/api/papper/store', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Upload successful
        // Navigate to a different page (e.g., '/dashboard')
        navigate('/dashboard');
      } else {
        // Handle upload failure
        // Display an error message or take appropriate action
        console.log('Upload failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    }
  };

  return (
    <div class="two">
      <nav>
        <p>Welcome To Past Paper System</p>
        <div class="nav-links">
          <a href="/dashboard">Home</a>
          <a href="#">Help</a>
          <a href="#">Online Support</a>
        </div>
      </nav>

      <section>
        <form onSubmit={handleSubmit}>
          <span></span>
          <div class="form-inner">
            <label htmlFor="paperName">Past Paper Name:</label>
            <input
              type="text"
              id="paperName"
              value={paperName}
              onChange={(e) => setPaperName(e.target.value)}
            />
            <label htmlFor="paperType">Past Paper Type:</label>
            <input
              type="text"
              id="paperType"
              value={paperType}
              onChange={(e) => setPaperType(e.target.value)}
            />
            <label htmlFor="paperYear">Past Paper Year:</label>
            <input
              type="text"
              id="paperYear"
              value={paperYear}
              onChange={(e) => setPaperYear(e.target.value)}
            />
            <label htmlFor="paperFile">Past Paper File:</label>
            <input
              type="file"
              id="paperFile"
              onChange={(e) => setPaperFile(e.target.files[0])}
            />
            <div class="actions">
                <button type="submit">Upload</button>
                <button type="button" onClick={() => navigate('/dashboard')}>
                  Cancel
                </button>
            </div>
          </div>
        </form>

        {/* 
        <form action="#" method="post">
            <span></span>
            <div class="form-inner">
                <label for="">Full Name:</label>
                <input type="text"/>
                <label for="">Email:</label>
                <input type="email" name="" id=""/>
                <label for="">Course Name:</label>
                <input type="text"/>
                <label for="">Phone Number:</label>
                <input type="text"/>
            </div>
        </form> */}
      </section>
    </div>
  );
};

export default AddPaper;
