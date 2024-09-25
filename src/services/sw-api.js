
  // export async function getAllStarships() {
  //   const res = await fetch('https://swapi.dev/api/starships/');
  //   const data = await res.json();
  //   return data;  
  // }
  

 import axios from 'axios';

// Named export for fetching all starships
export async function getAllStarships() {
  try {
    const res = await axios.get('https://swapi.dev/api/starships/');
    return res.data;  
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw error;
  }
}