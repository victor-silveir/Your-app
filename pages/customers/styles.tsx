import styled from 'styled-components'

export const Container = styled.div`
    max-width: 90rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    place-content: center;
    margin: 0 auto;

    @media(max-width: 45rem) {
        width: 150%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`