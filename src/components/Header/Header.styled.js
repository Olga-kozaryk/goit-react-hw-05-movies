import styled from "styled-components"

const HeaderStyled = styled('header')(() => {
    return {
        padding: '20px',
        borderBottom: 'solid 1px black',
        lineHeight: '1.2',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,103,212,1) 100%, rgba(0,212,255,1) 100%)',
        
        ul:{
            listStyle: 'none',
            display: 'flex',
            gap: '40px',

            li:{
                fontSize: '42px',
                fontWeight: '500',
                textDecoration: 'none',
        },
    },
        }

})

export default HeaderStyled