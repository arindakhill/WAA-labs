// src/components/Properties.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Property from './Property';

const Properties = () => {
  const { communityId } = useParams();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [communityName, setCommunityName] = useState('');

  useEffect(() => {
    axios.get(`https://65be74b9dcfcce42a6f2820c.mockapi.io/api/v1/communities/${communityId}/properties`)
      .then(response => {
        setCommunityName(response.data.name);
        setProperties(response.data.properties || []);
      })
      .catch(error => console.error("Fetch error:", error));
  }, [communityId]);

  return (
    <div>
      <h1>{communityName}</h1>
      {properties.map(property => (
        <Property key={property.id} id={property.id} type={property.type} price={property.price} communityId={`${communityId}`}/>
      ))}
      <Link to={`/communities/${communityId}/add-property`}>Add Property</Link>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Properties;
