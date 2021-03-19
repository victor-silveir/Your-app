import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: inline-block;
 
  &::before {
      height: 100%;
      content: "";
      position: ${props => props.fixed && 'fixed'};
      left: 0;
      right: 0%;
      z-index: -1;
      display: block;
      background: ${props => `url(${props.backgroundImage}) no-repeat center`};
      background: ${props => `${props.Color}`};
      background-size: cover;
      filter: brightness(50%);
  }
`