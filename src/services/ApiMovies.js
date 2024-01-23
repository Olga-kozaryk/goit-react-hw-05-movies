import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '09a8cd7e0a760fa659d2c7c5b140aba5';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  const {data} = await axios.get( `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
   return data;
};

export const fetchMoviesQuery = async query => {
  const {data} = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
}

export const fetchMovieId = async movieId => {
  const {data} = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};