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
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
  const getMovieDetails = async () => {
    try {
      const results = await fetchMovieId(movieId);
      setMovieDetails(results)
    } catch (error) {
      console.log(error);
    }
  };

  getMovieDetails()
},[movieId]);

const handleBack = () => {
  navigate(location.state?.from ?? '/')
}

  return (
    movieDetails && (
    <ContainerPage>
    <BtnGoBack handleBack={handleBack}/>
    
    <MovieCard movie = {MovieDetails}/>

    <ContainerDetails>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'} >
            Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} >
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