import ContainerPage from "components/ContainerPage.styled"
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import SearchMovies from "components/SearchMovies/SearchMovies";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchMoviesQuery } from "services/ApiMovies";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if(!query) return;
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const {results} = await fetchMoviesQuery(query);
        if (results.length === 0) {
          toast.dismiss();
          toast.error('movie not found');
        } else {
          setMovies(results);
        }
    } catch (error){
      toast.error(' Sorry, we could not fetch the movies. Please try again later.')
    }
    finally {
      setIsLoading(false);
    }}
    getMovie();
  },[query]);

  const handleSubmit = e => e.preventDefault();
  const handleChange = e => {
    const searchQuery = e.target.value;
    if (searchQuery === '') {
      return setSearchParams({})
    };
    setSearchParams({query:searchQuery});
  }

  return (
    <ContainerPage>
      <h1>Search Movie</h1>

      <SearchMovies 
        onSubmit={handleSubmit} 
        onChange={handleChange}/>
      { isLoading ? ( <Loader/> ) : ( <MovieList movies = {movies} location={location}/>) }
    </ContainerPage>
  )
}

export default Movies