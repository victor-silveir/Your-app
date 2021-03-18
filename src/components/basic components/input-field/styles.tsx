import { Field } from 'formik'
import styled from 'styled-components'

export const InputField = styled(Field)`
     background-color: #232129;
        border: 2px solid #232129;
        width: ${props => props.Width || '100%'};
        padding: ${props => props.Padding};
        border-radius: 0.625rem;
        font-size: 1rem;
`