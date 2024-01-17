import axios from "axios";
import { API_KEY } from "./Api";

export const fetchTrendingMovies =async () => {
  const {data} = await axios.get( `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
   return data;
}