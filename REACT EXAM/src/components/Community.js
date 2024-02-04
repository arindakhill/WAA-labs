// src/components/Community.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Community = ({ id, name, county }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/communities/${id}/properties`)}>
      <p>Name: {name}</p>
      <p>County: {county}</p>
    </div>
  );
};

export default Community;
