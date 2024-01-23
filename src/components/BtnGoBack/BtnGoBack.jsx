import { BsArrowLeftShort } from 'react-icons/bs'; 
import BtnGoBackStyled from './BtnGoBack.styled';
import { Link } from 'react-router-dom';

const BtnGoBack = ({GoBack}) => {
  return (
    <Link to={GoBack} style={{
        display: 'flex',
        padding: '20px 40px',
    }}> 
    <BtnGoBackStyled >
    <BsArrowLeftShort
    style={{ 
        width: '25px',
        height: '25px',
        display: 'inline-block' }}
            />
    Go back</BtnGoBackStyled>
    </Link>
  )
}

export default BtnGoBack