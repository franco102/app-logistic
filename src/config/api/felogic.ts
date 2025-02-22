import axios from 'axios'; 
const API_URL= "https://www.realtimetrackingpdf.lat/api"
const FELOGIC_API = axios.create({
  baseURL: API_URL,  // Cambia esta URL por la de tu API
  headers: {
    'Content-Type': 'application/json', 
  },
});
 

 
export default FELOGIC_API;