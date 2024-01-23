import styled from "styled-components"


const ReviewsListStyled = styled('ul') (() => {
  return {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    listStyle: 'none',
    li:{
        paddingBottom: '10px',

        h2:{
            marginBottom: '10px',
            fontSize: '20px',
            fontWeight: '500',
        },

    }
  }
})

export default ReviewsListStyled