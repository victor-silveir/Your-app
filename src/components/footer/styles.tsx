import styled from 'styled-components'

export const Footr = styled.footer`
    position: ${props => props.isfixed && 'fixed'};
    margin-top: 1rem;
    left: 0;
    bottom: 0;
    width: 100%;
`
export const FooterBar = styled.div`
    margin: 0 auto;
    max-width: 90rem;
    background-color: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Profile = styled.div`
    margin: 2rem 1.5rem;
    display: flex;
    align-items: center;      
`
export const Profilelogo = styled.img`
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
`

export const ProfileContent = styled.div` 
    display: flex;
    flex-direction: column;
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    margin: auto 2rem;
    a {
        width: 100%;
        text-decoration: none;
        
        & + a {
            margin-left: 2rem;
        }
    }
    svg {
        color: #ffffff;
        transition: 0.5s ease;
        
        :hover {
            color: #ff9000;
        }
    }
`