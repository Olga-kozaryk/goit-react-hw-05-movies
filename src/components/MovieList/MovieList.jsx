import { Link } from "react-router-dom"

const MovieList = ({trendingMovies}) => {
  return (
    <div>
        <h1>Trending today</h1>
        <ul>
            {trendingMovies.map( ({id , title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MovieList;