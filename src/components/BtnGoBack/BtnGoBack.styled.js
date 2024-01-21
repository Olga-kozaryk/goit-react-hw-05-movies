import styled from "styled-components"

const BtnGoBackStyled=styled('button')(() => {
  return{
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    border: '1px solid rgba(2,0,36,1)',
    borderRadius: '6px',
    backgroundColor: '#b5d1f2',

   '&:hover, focus':{
      backgroundColor: 'rgba(2,0,36,1)',
      color:' #ffffff',
    }
  }
})

export default BtnGoBackStyled