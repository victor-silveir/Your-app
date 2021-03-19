import styled from 'styled-components'

    export const CustomersContent = styled.ul`
        width: 100%;
        flex: 1;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background: #232129;
        padding: 20px;
        border-radius: 25px;

        @media(max-width: 90rem) {
            max-width: 80rem;
            margin: 0rem 20px;

        }
        @media(max-width: 45rem) {

        }

    `
    export const CustomersItems = styled.li`
        width: 100%;
        background-color: rgba(214, 214, 214, 0.5);
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 10px;
        padding: 2rem;
        overflow: hidden;
        cursor: pointer;

        & + li {
        margin-top: 20px;
        }
    `
    export const CostumersDiv = styled.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        

        span {
            & + span {
                margin-left: 1rem;
            }
        }
    `