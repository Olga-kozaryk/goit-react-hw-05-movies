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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
 
  const getMovies = useCallback(
    async (query) => {
      try {
        setIsLoading(true)
        setError('')
        const {results} = await fetchMoviesQuery(query)
        setMoviesSearch(results)
      } catch (error) {
          setError(error.message);
          setMoviesSearch([])
      }  finally {
        setIsLoading(false);
      }
    },[]
  )

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({search: searchQuery})
  };

  const handleChange = e => {
   setSearchQuery(e.target.value)
   }

  useEffect(()=> {
    const query = searchParams.get('search') ?? ''
    getMovies(query)
  },[getMovies, searchParams])

  return (
    <ContainerPage>
      <h1>Search Movie</h1>
      <SearchMovies 
      OnSubmit = {handleSubmit}
      OnChange = {handleChange}
      valueSearch = {searchQuery}
       />

     {isLoading && <Loader/>}
     {error && <p>
    Sorry, we could not fetch the movies. Please try again later.
  </p>}

<MovieList movies = {moviesSearch}/>
    </ContainerPage>
  )
}

export default Movies