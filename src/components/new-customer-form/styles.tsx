import styled, { css } from 'styled-components'

    export const NewCustomersContent = styled.form`
        flex: 1;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        background: #312E38;
        padding: 20px;
        border-radius: 25px;
    
        @media(max-width: 90rem) {
            max-width: 80rem;
            
        }

        h1 {
            text-align: Center;
        }
        
        h2 {
            margin-bottom: 2rem;
        }
        
        input {
            pointer-events: ${props => props.isdisabled && 'none' };
        }

        button {
            display: ${props => props.isvisible && 'none'};
        }
    `

    export const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    export const PersonalInfoDiv = styled.div`
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1rem;    
    `

    export const CpfDiv = styled.div`
        display: flex;
        width: 50%;
        align-items: center;
    `

    export const NameDiv = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
    `

    export const AdressSection1 = styled.div`        
        display: flex;
        width: 100%;
        margin-bottom: 0.5rem;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;

    input{
        & + input {
            margin-left: 0.5rem;
        }
    }
    `

    export const AdressSection2 = styled.div` 
            display: flex;
            width: 100%;
            margin-bottom: 0.5rem;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 1rem;
        
        input{
            & + input {
                margin-left: 0.5rem;
            }
        }
    `

    export const PhonesContent = styled.ul`
            flex: 1;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #312E38;
            padding: 20px;
            border-radius: 25px;
            width: 100%;
        `

    export const PhonesList = styled.li`
            background-color: #3E3B47;
            width: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            padding: 25px;
            overflow: hidden;

            & + li {
                margin-top: 10px;
            }

            div {
                display: flex;
                align-items: flex-start;
                justify-content: center;
            }
        `

    export const RadioGroup = styled.div`
        display: flex;
        align-items: center;
        border: solid 3px #232129;
        margin-top: 0.5rem;
        border-radius: 5px;


            input[type=radio] {
                position: absolute;
                visibility: hidden;
                display: none;
            }

            label {
                color: #ffffff;
                display: inline-block;
                cursor: pointer;     
            }

            input[type=radio]:checked + div{
                display: inline-block;
                color: #232129;
                font-weight: bold;
                background: #ff9000;
                border-radius: 5px;
                transition: .5s all ease-in-out;
    }
            input[type=radio] + div {
                padding: 7px 25px;

            }

            div {
                width: 100%;
                height: 100%;
            }

            ${props => props.isErrored && css`
                border-color: #c40000;
            `}
    `

    export const CodeDiv = styled.div`
        width: 32%;
        display: flex;
        align-items: center;
        
        input {
            text-align: center;
        }
    `
    export const NumberDiv = styled.div`
        width: 55%;
        display: flex;
        align-items: center;
    `

    export const ButtonDiv = styled.div`
        width: 100%;

        button {
            margin-left: auto;
        }
    `
    
    export const EmailDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `

    export const EmailList = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        input{
                margin-left: 1rem;
        }

        button {
            margin: 1rem ;
        }

        div + div {
            margin-top: 1rem;
        }       
    `

    export const EmailContent = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        background:  #3E3B47;
        width: 76%;
        border-radius: 10px;
        margin: 0 auto;
        padding: 1rem 0;
    `

    export const EmailButtonDiv = styled.div`
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    `

    export const CustomerButtonDiv = styled.div`
            width: 100%;
            display: flex;
            justify-content: center;
            place-content: center;

            button {
                & + button {
                    margin-left: 1rem;
                }
            }
    `

    export const RadioDiv = styled.div`
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        

    `
    
   