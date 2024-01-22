import styled from "styled-components"


const ReviewsListStyled = styled('ul') (() => {
  return {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    li:{
        paddingBottom: '10px',
        borderBottom: '1px solid #d3d3d3',
        h2:{
            marginBottom: '10px',
            fontSize: '20px',
            fontWeight: '500',
        },

    }
  }
})

export default ReviewsListStyled