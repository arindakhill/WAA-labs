// src/components/SectionDetails.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SectionDetails.css'; // Make sure you have the correct path to your CSS file

const SectionDetails = () => {
    const [section, setSection] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedStudentToAdd, setSelectedStudentToAdd] = useState('');

    // Toggle student selection for removal
    const toggleStudentSelection = (studentId) => {
        setSelectedStudents(prevSelected => 
            prevSelected.includes(studentId)
                ? prevSelected.filter(id => id !== studentId)
                : [...prevSelected, studentId]
        );
    };


    useEffect(() => {
        // Fetch section details
        axios.get(`http://localhost:8080/api/v1/sections/${id}`)
            .then(response => {
                setSection(response.data);
                setStudents(response.data.students || []);
            })
            .catch(error => console.error('Error fetching section details:', error));

        // Fetch all students for the dropdown
        axios.get(`http://localhost:8080/api/v1/students`)
            .then(response => setAllStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    }, [id]);



    // Handler for removing selected students
 
    const handleRemoveSelected = async () => {
        try {
            for (let studentId of selectedStudents) {
                await axios.delete(`http://localhost:8080/api/v1/sections/${id}/students/${studentId}`);
            }
            // Fetch the updated student list
            const response = await axios.get(`http://localhost:8080/api/v1/sections/${id}`);
            setStudents(response.data.students || []);
            setSelectedStudents([]); // Reset the selection
        } catch (error) {
            console.error('Error removing students:', error);
        }
    };



 // Filter out the students already in the roster from the dropdown options
 const studentsNotInRoster = allStudents.filter(
    (student) => !students.some((rosterStudent) => rosterStudent.id === student.id)
);











   // Handler for adding the selected student
   const handleAddButtonClick = () => {
    if (selectedStudentToAdd) {
        handleAddStudent(selectedStudentToAdd);
        setSelectedStudentToAdd(''); // Reset the dropdown after adding
    }
};


  // Handler for selecting a student from dropdown
  const handleSelectChange = (e) => {
    setSelectedStudentToAdd(e.target.value);
};







    // Handler for adding a student to the section
    const handleAddStudent = async (studentId) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/sections/${id}/students/${studentId}`);
            // Fetch the updated student list
            const response = await axios.get(`http://localhost:8080/api/v1/sections/${id}`);
            setStudents(response.data.students);
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };







    // Handler for navigating back
    const handleBack = () => {
        navigate('/sections');
    };

    // Render the component UI
    return (
        <div className="section-details">
            <h1>WAA 2nd Exam</h1>
            <h2>Section Details</h2>
            {section && (
                <>
                    <p>ID: {section.id}</p>
                    <p>Name: {section.name}</p>
                    <p>Term: {section.term}</p>
                    <p>Academic Year: {section.academicYear}</p>
                    <h3>Roster</h3>
                    <div className="students-list">
                        {students.map(student => (
                            <div className="student-item" key={student.id}>
                                <p>ID: {student.id}</p>
                                <p>Name: {student.name}</p>
                                <input
                                    type="checkbox"
                                    checked={selectedStudents.includes(student.id)}
                                    onChange={() => toggleStudentSelection(student.id)}
                                />
                            </div>
                        ))}
                    </div>
                    <button id="remove-selected" onClick={handleRemoveSelected}>remove selected</button>


                    <div className="add-student-section">
                    <select value={selectedStudentToAdd} onChange={handleSelectChange}>
                        <option value="">Select a student</option>
                        {studentsNotInRoster.map(student => (
                            <option key={student.id} value={student.id}>{student.id} - {student.name}</option>
                        ))}
                    </select>
                    <button id="add-selected" onClick={handleAddButtonClick}>Add</button>
                </div>


                    <button onClick={handleBack}>Back</button>
                </>
            )}
        </div>
    );
    
};

export default SectionDetails;
