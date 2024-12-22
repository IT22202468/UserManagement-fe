import axios from 'axios';

const API_URL = 'http://localhost:5000/api/instructor';

// Add a lecturer
export const addInstructor = async function(instructorData) {
    const response = await axios.post(`${API_URL}/add`, instructorData);
    return response.data;
};

// Fetch all lecturers
export const fetchInstructors = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };