// src/components/AddProperty.js

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProperty.css'; // Make sure to create an AddProperty.css file for styling

const AddProperty = () => {
    const { communityId } = useParams();
    const navigate = useNavigate();
    const [propertyData, setPropertyData] = useState({
        type: '',
        price: '',
        communityId: communityId  // Pre-populate with communityId from the URL parameter
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPropertyData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your actual API endpoint
            await axios.post('https://65be74b9dcfcce42a6f2820c.mockapi.io/api/v1/properties', propertyData);
            
            
            navigate(`/communities/${communityId}/properties`);
        } catch (error) {
            console.error('Error adding new property:', error);
        }
    };

    return (
        <div className="add-property">
            <h1>Add New Property</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">Type</label>
                <input
                    id="type"
                    name="type"
                    type="text"
                    value={propertyData.type}
                    onChange={handleInputChange}
                />

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    value={propertyData.price}
                    onChange={handleInputChange}
                />

                <button type="submit">Add Property</button>
            </form>
        </div>
    );
};

export default AddProperty;
