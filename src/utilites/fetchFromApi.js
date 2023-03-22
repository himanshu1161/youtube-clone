import axios from "axios";
const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET' ,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '9d54bbc36cmsh8364d36008bf69ap13d769jsne7ed3f8a1ff4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }