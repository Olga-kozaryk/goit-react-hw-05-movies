import HeaderStyled from "./Header.styled"
import NavLinkStyled from "./NavLink.styled"

const Header = () => {
  return (
      <HeaderStyled>
        <nav>
            <ul>
                <li>
                    <NavLinkStyled to={'/'}>Home</NavLinkStyled> 
                </li>
                <li>
                    <NavLinkStyled  to={'/movies'}>Movies</NavLinkStyled>
                </li>
            </ul>
        </nav>
    </HeaderStyled>
  )
}

export default Header