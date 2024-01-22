import ReviewsListStyled from "./ReviewsListStyled.styled"


const ReviewsList = ({reviews}) => {
  return (
    <ReviewsListStyled>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ReviewsListStyled>
  )
}

export default ReviewsList