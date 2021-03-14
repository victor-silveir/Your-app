import styled from 'styled-components'

export const Headr = styled.header`
    width: 100%;
    margin-bottom: 2rem;
    position: sticky;

    @media(max-width: 45rem) {
        display: none;
    }
`;

export const MHeadr = styled.header`
    width: 100%;
    margin-bottom: 2rem;
    position: sticky;
    display: none;

    @media(max-width: 45rem) {
        display: flex;
    }


`;

export const Navbar = styled.div`
    width: 100%;
    max-width: 90rem;
    margin: 0rem auto;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavMenu = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;


`

export const NavLogo = styled.img `
    width: 9rem;
    cursor: pointer;

`

export const NavItens = styled.a `
display: inline-block;
    padding: 0.5rem 1rem;
    letter-spacing: 0.125rem;
    font-size: 1.125rem;
    font-weight: 400;
    position: relative;
    transition: 0.5s ease;

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0rem;
        margin-top: 0.125rem;
        width: 0rem;
        height: 0.125rem;
        background: linear-gradient(270deg, #ff9000 0%, rgba(71, 191, 164, 0) 99.83%);

        transition: .5s ease-in-out;
    }

    &:hover { 
        color: $gray;

        &::after {
            width: 100%;
        }
    }

`
