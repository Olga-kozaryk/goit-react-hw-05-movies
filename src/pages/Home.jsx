import ContainerPage from "components/ContainerPage.styled";

import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "services/ApiMovies";


const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);

useEffect(() => {
 const getTrendingMovies = async () => {
 
  const {results} = await fetchTrendingMovies();
  setTrendingMovies(results);

  };

 getTrendingMovies();
}, []);

return (
  <ContainerPage>
    <h1>Trending today</h1>

    {trendingMovies.length ?
    (<MovieList movies = {trendingMovies} />) :
(<p>
  Sorry, we could not fetch the trending movies. Please try again later.
</p>)} 
  </ContainerPage>
)
}

export default Home