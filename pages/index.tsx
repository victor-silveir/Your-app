import Background from "../src/components/basic components/background/index";
import FormLogin from "../src/components/form-login";
import styled from 'styled-components'
import { AuthCredentialsModel } from "../src/models/AuthCredentialsModel";



const initialData: AuthCredentialsModel = {
  userName: '',
  password: ''
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: row;

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  margin: 0rem 1rem;
  max-width: 30rem;

 
`


export default function LoginPage() {

  return (
    <Container>
      <Content>
        <FormLogin initialData={initialData} />
      </Content>
      <Background backgroundImage='/img/background2.jpg'/>
    </Container>
  )
};