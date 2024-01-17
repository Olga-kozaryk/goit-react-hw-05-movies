import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavLinkStyled = styled(NavLink)(() => {
  return {
    color:'#ffffff',
    '&.active':{
      color: '#dd1033',
    },
  }
})

export default NavLinkStyled 