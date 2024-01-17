import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import { useState } from "react"


const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(false)

  return (
 <> 
 {isLoading ? (<Loader/>) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>) : (
          <MovieList trendingMovies={trendingMovies}/>
        )}
 </>
  )
}

export default Home