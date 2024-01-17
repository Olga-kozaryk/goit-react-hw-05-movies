import ContainerPage from "components/ContainerPage.styled";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "services/FnMovies";


const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(false);

useEffect(() => {
 const getTrendingMovies = async () => {
  try {
    setError(false);
    setIsLoading(true);
  const {results} = await fetchTrendingMovies();
  setTrendingMovies(results);
}
  catch (error) {
    setError(true);
  }
   finally {
    setIsLoading(false);
  }
  };

 getTrendingMovies();
}, []);

return (
  <ContainerPage>
  { isLoading ? ( <Loader/> ) : error ? (<p>
    Sorry, we could not fetch the trending movies. Please try again later.
  </p>) : ( <MovieList trendingMovies = {trendingMovies} />) }
  </ContainerPage>
)
}

export default Home