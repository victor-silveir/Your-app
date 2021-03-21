import styled from 'styled-components'

export const ModalContainer = styled.div`
      width: 100%;  
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;

     
`

export const ModalContent = styled.div`
          padding: 0 auto;
          width: 50%;  
          background-Color: #ff9000;
          border-radius: 5px;
          max-width: 500px;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 1rem;
          
          h2 {
              color: #232129;
              margin-right: auto;
              margin-bottom: 0.8rem;
              font-size: 1.3rem;
          }
          
`

export const ModalItens = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;

    & + div {
        margin-top: 16px;
    }

        label {
            margin: 0 10px;
            font-weight: 600;
        }
  
            input{
              margin: 0 auto;
            }
`

export const ModalButtons = styled.div`
        
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 10px;

    button {
        margin: 1rem auto;

        & + button {
            margin-left: 1rem;

            &:hover {
            background: #a1a1a1;
        }
        }
    }
`