import axios from "axios";
import { API_KEY, BASE_URL } from "./Api";

export const fetchTrendingMovies = async () => {
  const {data} = await axios.get( `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
   return data;
};

export const fetchMoviesQuery = async (query) => {
  const {data} = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
}

export const fetchMovieId = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};