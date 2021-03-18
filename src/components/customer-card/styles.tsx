import styled from 'styled-components'

export const Customer = styled.div`
        max-width: 440px;
        background: #ff9000;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        position: sticky;
        top: 10px;
        margin-right: 1rem;

        @media(max-width: 45rem) {
            position: static;
            margin: 1rem auto;
            
        }


        h1 {
            text-align: center;
            margin: 2rem auto;

        }
        
        p {
            text-align: justify;
            margin: 0 auto;
            color: #232129;
            font-weight: 600;
        }

        button {
        width: 100%;
        height: 3.5rem;
        padding: 0 ;
        border-radius: 0.625rem;
        background-color: #232129;
        color: #ffffff;
        border: 0;
        font-weight: 400;
        font-size: 1rem;
        margin: 2rem auto;
        transition: 0.5s ease;

    

        }
    `