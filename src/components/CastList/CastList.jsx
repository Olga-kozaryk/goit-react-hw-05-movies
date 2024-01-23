import CastListStyled from "./CastList.styled"


const CastList = ({cast}) => {
  return (
    <div>
        <CastListStyled>
           {cast.map(({profile_path, id, name, character}) => 
           ( <li key={id}>

                {profile_path ? (
                  <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name} profile`}/>
                ) : (
                    <img
                    src={`https://via.placeholder.com/200x300?text=No+Image`}
                    alt={`${name} profile`}
                  />
                )}
                
                    <h2>{name}</h2>
                    <p>Character:{character}</p>
                


            </li>))}
        </CastListStyled>
    </div>
  )
}

export default CastList