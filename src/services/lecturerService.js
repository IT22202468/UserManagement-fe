import axios from 'axios';

const API_URL = 'http://localhost:5000/api/lecturers';

// Add a lecturer
export const addLecturer = async function(lecturerData) {
    const response = await axios.post(`${API_URL}/add`, lecturerData);
    return response.data;
};

// Fetch all lecturers
export const fetchLecturers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };