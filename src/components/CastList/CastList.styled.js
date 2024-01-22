import styled from "styled-components"


const CastListStyled= styled('ul') (() => {
  return {
  marginTop: '30px',
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  flexWrap: 'wrap',
  li:{
    width: 'calc((100% - 4 * 40px) / 5)',
    height: '400px',
    wordWrap: 'break-word',
    div:{
      marginTop: '20px',
      maxWidth: '220px',
      h2:{
        marginBottom: '10px',
      },
      p:{
        margin: '30px auto 0 auto',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        maxWidth: '500px',
      }
    }
  }
  }
})

export default CastListStyled