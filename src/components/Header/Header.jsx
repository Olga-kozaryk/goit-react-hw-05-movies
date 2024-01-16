import { NavLink } from "react-router-dom"
import HeaderStyled from "./Header.styled"

const Header = () => {
  return (
    <HeaderStyled>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink> 
                </li>
                <li>
                    <NavLink to={'/movies'}>Movies</NavLink>
                </li>
            </ul>
        </nav>
    </HeaderStyled>
  )
}

export default Header