import BtnGoBack from "components/BtnGoBack/BtnGoBack";
import ContainerPage from "components/ContainerPage.styled";
import Loader from "components/Loader/Loader";
import MovieCard from "components/MovieCard/MovieCard";
import ContainerDetails from "components/MovieDetails.styled";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { fetchMovieId } from "services/ApiMovies";


const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
  const fetchMovie = async () => {
    try {
      const movieData = await fetchMovieId(movieId);
      setMovie(movieData)
    } catch (error) {
      console.log(error);
    }
  };

  movieId && fetchMovie()
},[movieId]);

const handleBack = () => {
  navigate(location.state?.from ?? '/')
}

  return (
    movie && (
    <ContainerPage>
    <BtnGoBack handleBack={handleBack}/>
    
    <MovieCard movie={movie}/>

    <ContainerDetails>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location?.state?.from ?? '/' }} >
            Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: location?.state?.from ?? '/' }} >
            Reviews
            </Link>
          </li>
        </ul>
      </ContainerDetails>

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </ContainerPage>
    )
  )
}

export default MovieDetails