import styled from 'styled-components'

export const Span = styled.span`
color: ${props => `${props.Color}`};
font-size: ${props => `${props.fontSize}rem`};
font-weight: ${props => `${props.fontWeight}`};
`