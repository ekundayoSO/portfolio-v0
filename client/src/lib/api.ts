import axios from "axios";


const API_URL = import.meta.env.VITE_API_BASE_URL + '/api/blogs';

// Fetch all blogs
export const fetchBlogs = async (locale: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        locale: locale,
        populate: '*',      
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Fetch a single blog by documentId
export const fetchBlogById = async (locale: string, documentId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${documentId}`, {
      params: {
        locale: locale,
        populate: '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};