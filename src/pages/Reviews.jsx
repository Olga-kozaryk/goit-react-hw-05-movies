import ContainerPage from "components/ContainerPage.styled";
import ReviewsList from "components/ReviewsList/ReviewsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "services/ApiMovies";


const Reviews = () => {
const{movieId} = useParams();
const[reviews, setReviews] = useState([]);

useEffect(() => {
  const getReviews = async () => {
    try {
      const {reviews} = await fetchMovieReviews(movieId);
      setReviews(reviews);
    } catch (error) {
      console.log(error);
    }
  };
  getReviews();
},[movieId]);

  return (
    <ContainerPage>
      <h1>Reviews</h1>
      {reviews.length ? <ReviewsList reviews={reviews}/> :
      <p>We don't have any reviews for this movie yet.</p>}
    </ContainerPage>
  )
}

export default Reviews