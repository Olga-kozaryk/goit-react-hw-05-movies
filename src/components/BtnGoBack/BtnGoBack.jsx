import { BsArrowLeftShort } from 'react-icons/bs'; 
import BtnGoBackStyled from './BtnGoBack.styled';

const BtnGoBack = ({handleBack} ) => {
  return (
    <div style={{
        display: 'flex',
        padding: '20px 40px',
    }}> 
    <BtnGoBackStyled onClick={handleBack} >
    <BsArrowLeftShort
    style={{ 
        width: '25px',
        height: '25px',
        display: 'inline-block' }}
            />
    Go back</BtnGoBackStyled>
    </div>
  )
}

export default BtnGoBack