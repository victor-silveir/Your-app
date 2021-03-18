import styled from 'styled-components'

export const Content = styled.section`
    overflow-x: hidden;
    max-width: 90rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
;
    margin: 0 auto;
    padding: 0 auto;
    h1 {
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 1rem;
        font-weight: 600;
        transition: 0.3s ease;

        &:hover {
            color: #ff9000;
        }
    }


    p {
        color: #ffffff;
        font-size: 1rem;
        text-align: justify;
        font-weight: 600;
    }

    a{
        text-decoration: none;
        color: #ff9000;

    }
    @media(max-width: 90rem){
    }
    
    @media(max-width: 45rem){
        width: auto;
        max-width: auto;
  
        h1{
            font-size: 1.8rem;
            text-align: center;
        }

        p{
            font-size: 1rem;
            text-align: center;
        }
    }


`
