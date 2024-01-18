import styled from "styled-components"

const ListStyled = styled('ul')(() => {
  return {
    listStyle: 'none',
    marginLeft:'auto',
    marginRight:'auto',
    li:{
      fontSize: '18px',
      fontWeight: '500',
      marginBottom: '15px'
      },
  }}
)

export default ListStyled ;