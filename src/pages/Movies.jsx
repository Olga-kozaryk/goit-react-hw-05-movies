import ContainerPage from "components/ContainerPage.styled"
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import SearchMovies from "components/SearchMovies/SearchMovies";
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchMoviesQuery } from "services/ApiMovies";


const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const [searchParams] = useSearchParams();
 
  const getMovies = useCallback(
    async (query) => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetchMoviesQuery(query)
        setMoviesSearch(response.movies)
      } catch (error) {
          setError(error.message)
      }  finally {
        setIsLoading(false);
      }
    },[]
  )

  useEffect(()=> {
    const query = searchParams.get('search')
    getMovies(query)
  },[getMovies, searchParams])

  return (
    <ContainerPage>
      <h1>Search Movie</h1>
      <SearchMovies/>

     {isLoading && <Loader/>}
     {error && <h1>{error}</h1>} 

   {moviesSearch && <MovieList movies = {moviesSearch}/>}
    </ContainerPage>
  )
}

export default Movies