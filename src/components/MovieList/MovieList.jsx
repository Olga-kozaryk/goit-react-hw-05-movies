import { Link,} from "react-router-dom"
import ListStyled from "./MovieList.styled";


const MovieList = ({movies}) => {
  return (
    <div>
        <ListStyled>
            {movies.map( ({id , title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ListStyled>
    </div>
  )
}
export default MovieList;