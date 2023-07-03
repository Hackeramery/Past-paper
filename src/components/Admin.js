import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min';
import './Dashboard.css';

const Admin = () => {
  const navigate = useNavigate();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    // Fetch the data from the endpoint
    axios.get('http://127.0.0.1:8000/api/papper/')
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setPapers(response.data.data);
        } else {
          console.error('Invalid papers data:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching papers:', error);
      });
  }, []);

  const handleAddPaper = (e) => {
    e.preventDefault();
    // If authentication is successful, navigate to a different page
    navigate('/Addppr');
  };


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/papper-delete/${id}`);

      if (response.status === 200) {
        // Delete successful, handle accordingly
        // For example, you could refresh the papers list
        // by making another GET request or updating the state
        // setPapers(newPapers);
      } else {
        // Delete failed, handle accordingly
      }
    } catch (error) {
      // Handle error
      console.error('Error deleting paper:', error);
    }
    window.location.reload();
  };

  return (
    <div id="container">
      <div id="sidebar">
        <h5>PAST PAPER YEAR</h5>
        <ul id="list">
          <li>2019</li>
          <li>2020</li>
          <li>2020</li>
          <li>2021</li>
          <li>2022</li>
          <a href='/adminlogin' id="admin">Admin</a>
        </ul>
      </div>
      <div id="content">
        <div id="search-container">
          <input type="text" id="search-input" placeholder="Search..." />
          <input type="submit" id="search-button" value="Submit" />
          <a href="#" onClick={handleAddPaper}>Add Paper</a>
        </div>
        <div className="pp">
          <table>
            <thead>
              <tr>
                <th className="no">No.</th>
                <th>Name</th>
                <th>Type</th>
                <th>Year</th>
                <th>Paper</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {papers.map((paper, index) => (
                <tr key={paper.id}>
                  <td className="no">{index + 1}</td>
                  <td>{paper.name}</td>
                  <td>{paper.type}</td>
                  <td>{paper.year}</td>
                  <td> <a href={`http://127.0.0.1:8000/api/download-paper/${paper.id}`}>
          <img src='./download.png' alt='Download' />
        </a></td>
                  <td><a href="#">Edit</a><a href="#" onClick={() => handleDelete(paper.id)}>Delete</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
