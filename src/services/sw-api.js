
  export async function getAllStarships() {
    const res = await fetch('https://swapi.dev/api/starships/');
    const data = await res.json();
    return data;  // Return the full data object, including `next` and `results`
  }
  