// src/components/Sections.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sections.css'; // Make sure you have the correct path to your CSS file

const Sections = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint
        axios.get('http://localhost:8080/api/v1/sections')
            .then((response) => {
                setSections(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the sections!', error);
            });
    }, []);

    return (
        <div className="sections-page">
            <h1>WAA 2nd Exam</h1>
            <h2>Sections</h2>
            <div className="section-list">
                {sections.map((section) => (
                    <div className="section-item" key={section.id}>
                        <div className="section-info">
                            <p>ID: {section.id}</p>
                            <p>Name: {section.name}</p>
                        </div>
                        <div className="section-actions">
                            <Link to={`/sections/${section.id}`} className="button details-button">Section Details</Link>
                            <Link to={`/sections/${section.id}/edit`} className="button edit-button">Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sections;
