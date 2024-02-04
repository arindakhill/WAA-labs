// src/routes/PageRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sections from '../components/Sections';
import SectionDetails from '../components/SectionDetails';
import UpdateSection from '../components/UpdateSection';
import Students from '../components/Students';
import App from '../App'; // Assuming this is the root component that includes PageRoutes

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Sections />} />
            <Route path="/sections" element={<Sections />} />
            <Route path="/sections/:id" element={<SectionDetails />} />
            <Route path="/sections/:id/edit" element={<UpdateSection />} />
            <Route path="/students" element={<Students />} />
            {/* Additional routes can be added as needed */}
        </Routes>
    );
};

export default PageRoutes;
