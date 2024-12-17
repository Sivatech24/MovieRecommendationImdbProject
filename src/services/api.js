import axios from 'axios';

const API_BASE_URL = 'mongodb+srv://myAtlasDBUser:<db_password>@movierecommendation.nwujz.mongodb.net/?retryWrites=true&w=majority&appName=MovieRecommendation';

export const saveRating = async (movieName, rating, username) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addRating`, {
      username,
      movieName,
      rating,
    });
    return response.data.message;
  } catch (error) {
    console.error('Error saving rating:', error);
    throw error;
  }
};
