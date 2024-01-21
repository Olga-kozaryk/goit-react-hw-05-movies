import { BiSearchAlt2 } from "react-icons/bi";
import FormStyled from "./FormStyled.styled";
import ContainerForm from "./ContainerForm.styled";

const SearchMovies = ({OnSubmit, OnChange, valueSearch}) => {

  return (
    <ContainerForm>
    <FormStyled onSubmit={OnSubmit}>
      <input 
        name="search"
        type="text" 
        value={valueSearch}
        placeholder="Search movies"
        onChange={OnChange}/>
      <button type="submit">
      <BiSearchAlt2 size="20" />
      </button>
    </FormStyled>
    </ContainerForm>
  )
}
export default SearchMovies