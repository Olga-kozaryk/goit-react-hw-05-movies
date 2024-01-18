import { Link,} from "react-router-dom"
import ListStyled from "./MovieList.styled";


const MovieList = ({movies, location}) => {
  return (
    <div>
        <ListStyled>
            {movies.map( ({id , title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`} state={{from:location}}>
                        {title}
                    </Link>
                </li>
            ))}
        </ListStyled>
    </div>
  )
}
export default MovieList;