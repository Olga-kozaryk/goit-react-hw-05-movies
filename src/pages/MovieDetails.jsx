import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom"
import { fetchMovieId } from "services/ApiMovies";

const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation;

  const fetchMovie = async (movieId) => {
    try {
      const movieData = await fetchMovieId(movieId);
      setMovie(movieData)
    } catch (error) {
      console.log(error);
    }
  }
useEffect(() => {
  fetchMovie(movieId)
},[movieId]);

const handleBack = () => {
  Navigate(location.state ?? '/')
}

  return (
    movie && (
    <>
    <button onClick={handleBack}>Go back</button>
    <div>MovieDetails</div>
    </>
    )
  )
}

export default MovieDetails