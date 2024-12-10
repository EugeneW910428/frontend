import axios from 'axios';

const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

fetch(`${backendURL}/api/schedule/generate`, {
    method: 'POST',
    body: formData,
});


// Function to generate the schedule
export const generateSchedule = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/schedule/generate`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Returns the generated schedule
    } catch (error) {
        console.error('Failed to generate schedule:', error.message);
        throw error;
    }
};

// Function to fetch courses (both core and elective) directly from the backend
export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/courses`); // Ensure this endpoint is implemented in your backend
        return response.data; // The backend should handle fetching and classification
    } catch (error) {
        console.error('Failed to fetch courses:', error.message);
        throw error;
    }
};






