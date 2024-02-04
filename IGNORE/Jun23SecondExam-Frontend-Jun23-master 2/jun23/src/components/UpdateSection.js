// src/components/UpdateSection.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateSection.css'; // Ensure you have the correct path to your CSS file

const UpdateSection = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [sectionData, setSectionData] = useState({
        name: '',
        term: '',
        academicYear: ''
    });

    useEffect(() => {
        // Fetch the current section details to populate the form fields
        axios.get(`http://localhost:8080/api/v1/sections/${id}`)
            .then(response => {
                const { name, term, academicYear } = response.data;
                setSectionData({ name, term, academicYear });
            })
            .catch(error => console.error('Error fetching section:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSectionData(prevData => ({
            ...prevData,
            [name]: name === 'academicYear' ? parseInt(value, 10) : value
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/sections/${id}`, sectionData);
            navigate('/sections');
        } catch (error) {
            console.error('Error updating section:', error);
        }
    };

    return (
        <div className="update-section">
            <h1>WAA 2nd Exam</h1>
            <h2>Update Section</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={sectionData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="term">Term</label>
                <input
                    id="term"
                    name="term"
                    type="number"
                    value={sectionData.term}
                    onChange={handleInputChange}
                />

                <label htmlFor="academicYear">Academic Year</label>
                <input
                    id="academicYear"
                    name="academicYear"
                    type="number"
                    value={sectionData.academicYear}
                    onChange={handleInputChange}
                />

                <button type="submit">Update Section</button>
            </form>
        </div>
    );
};

export default UpdateSection;
