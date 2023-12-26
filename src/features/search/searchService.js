import axios from "axios";
const APIKEY = import.meta.env.VITE_APIKEY;
const CX = import.meta.env.VITE_CX;

async function Searchz(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${CX}&q=${query}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}
// https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${CX}&q=${query}&searchType=image
export default Searchz;
