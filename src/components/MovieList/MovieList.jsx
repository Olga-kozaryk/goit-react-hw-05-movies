import { Link, useLocation,} from "react-router-dom"
import ListStyled from "./MovieList.styled";


const MovieList = ({movies}) => {
    const location = useLocation;
  return (
    <div>
        <ListStyled>
            {movies.map( ({id , title }) => (
                <li key={id}>
                    <Link to={`movies/${id}`} state = {{ from: location?.state?.from ?? '/' }}>
                        {title}
                    </Link>
                </li>
            ))}
        </ListStyled>
    </div>
  )
}
export default MovieList;