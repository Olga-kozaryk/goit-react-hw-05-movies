import CastList from "components/CastList/CastList";
import ContainerPage from "components/ContainerPage.styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "services/ApiMovies";


const Cast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const {cast} = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ContainerPage>
      <h1>Cast</h1>

      {cast.length ? <CastList cast={cast}/> :
      <p>We don't have any information about the cast yet.</p>}
    </ContainerPage>
  )
}

export default Cast