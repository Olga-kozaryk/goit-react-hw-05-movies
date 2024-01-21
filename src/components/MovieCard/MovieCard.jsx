import { defaultImg } from 'services/Api';
import ContainerMovieCard from './ContainerMovieCard.styled';

const MovieCard = ({movie}) => {
const {title, release_date, poster_path, vote_average,overview, genres} =
movie;

const imagePath = poster_path ? 
`https://image.tmdb.org/t/p/w300${poster_path}`: defaultImg;

const userScore = vote_average
? `${(vote_average * 10).toFixed(0)}%`
: 'Not rated yet';

  return (
    <ContainerMovieCard>

      <img src = {imagePath} width={250} alt = {title}/>

      <div>
        <h1> {title} {release_date ?? ''} </h1>
        <p> User score: {userScore}</p>

        <h2>Overview</h2>
        <p> {overview ?? '' } </p>

        <h2>Genres</h2>
        {genres && 
        (<p>
          {genres.map(genre => genre.name).join(',')}
        </p>)}
      </div>

    </ContainerMovieCard>
  )
}

export default MovieCard