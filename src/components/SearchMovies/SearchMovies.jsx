
const SearchMovies = ({onSubmit, onChange, query}) => {
 
  return (
    <form onSubmit={onSubmit}>
      <input 
        name="query"
        type="text" 
        value={query}
        placeholder="Search movies"
        onChange={onChange}/>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchMovies