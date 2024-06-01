// src/components/PetShop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Splash.css";

const PetShop = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const apiKey = 'live_zy980ApRvFW38BmIRqWGviNM3xnqpS0AWYEvg7OAu4x7BrlQxNKgiqiNvw1nMx2s';
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
          'x-api-key': apiKey
        }
      });
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPets = pets.filter(pet => {
    return pet.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search pets..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* For breeds, there is no 'type' property in the response */}
      {/* <select value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
      </select> */}
      <ul>
        
      </ul>
    </div>
  );
};

export default PetShop;
