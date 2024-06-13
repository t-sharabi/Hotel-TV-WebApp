// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'YOUR_SERVER_URL';

export const getCategories = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v4/genreGetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories', error);
    throw error;
  }
};

export const getMovies = async (token, page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v4/media/movies/by-genres/search/movies`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { rate: 7, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies', error);
    throw error;
  }
};
