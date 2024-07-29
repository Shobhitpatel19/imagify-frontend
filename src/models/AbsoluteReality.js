/* eslint-disable no-undef */
import axios from 'axios';

async function AbsoluteReality(data) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/digiplay/AbsoluteReality_v1.8.1",
      data,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        responseType: 'blob'
      }
    );
    return response.data; 
  } catch (error) {
    console.error('Error in AbsoluteReality:', error);
  }
}

export default AbsoluteReality;
