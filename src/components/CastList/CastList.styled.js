import styled from "styled-components"


const CastListStyled= styled('ul') (() => {
  return {
  marginTop: '30px',
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: '40px',
  li:{
    width: 'calc((100% - 5 * 50px) / 6)',
    height: '400px',
    wordWrap: 'break-word',
    backgroundColor: '#f8f8f8',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
      h2:{
        marginBottom: '10px',
        p:{
          margin: '30px auto 0 auto',
          textAlign: 'center',
          padding: '20px',
        },

      }
    }
  }
  }
)

export default CastListStyled