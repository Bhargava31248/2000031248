import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const MyComponent = () => {
  const { apiUrl } = useParams();
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNumbers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      {/* Render the numbers */}
      <p>Numbers: {numbers.join(', ')}</p>
    </div>
  );
};




const App = () => {
  return (
    <Router>
  <Route path="/my-component/:apiUrl" component={MyComponent} />
</Router>
  );
};

export default MyComponent;