import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getFaqs = async (lang = 'en') => {
  try {
    const response = await axios.get(`${API_URL}/faqs?lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
};

export const createFaq = async (faqData) => {
  try {
    const response = await axios.post(`${API_URL}/faqs`, faqData);
    return response.data;
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error;
  }
};