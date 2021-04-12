import styled from 'styled-components'

export const ButtonCustom = styled.button`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '3.5rem'};
    padding: 0 1rem;
    color: #ffffff;
    border-radius: 0.625rem;
    background-color: ${props => props.color || '#a1a1a1'};
    border: 0;
    font-weight: ${props => props.fontWeight || '600'};
    font-size: 1rem;
    margin-top: 1rem;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.backgroundHover};
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`
  