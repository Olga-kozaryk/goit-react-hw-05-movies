import styled from "styled-components"


const ContainerMovieCard = styled('div')(() => {
  return {
    display: 'flex',
    gap: '40px',
    marginTop: '20px',
    marginLeft: '40px',
    div:{
      paddingTop: '20px',
      maxWidth: '1100px',
      textAlign: 'start',
    }

  }
})

export default ContainerMovieCard