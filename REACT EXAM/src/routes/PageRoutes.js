// src/routes/PageRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Communities from '../components/Communities';
import Properties from '../components/Properties';
import AddProperty from '../components/AddProperty';

import App from '../App'; 

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Communities />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/communities/:communityId/properties" element={<Properties />} />
            <Route path="/communities/:communtiyId/add-property" element={<AddProperty />} />
           
            {/* Additional routes can be added as needed */}
        </Routes>
    );
};

export default PageRoutes;
