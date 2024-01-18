import { BiSearchAlt2 } from "react-icons/bi";
import FormStyled from "./FormStyled.styled";
import ContainerForm from "./ContainerForm.styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({search: searchQuery})
  };

  const handleChange = ({target:{value}}) => {
   setSearchQuery(value)
   }

   useEffect(() => {
    !searchQuery && setSearchQuery(searchParams.get('search'))
   },[searchParams,searchQuery]);

  return (
    <ContainerForm>
    <FormStyled onSubmit={handleSubmit}>
      <input 
        name="search"
        type="text" 
        value={searchQuery}
        placeholder="Search movies"
        onChange={handleChange}/>
      <button type="submit">
      <BiSearchAlt2 size="20" />
      </button>
    </FormStyled>
    </ContainerForm>
  )
}

export default SearchMovies