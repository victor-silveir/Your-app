import Background from "../src/components/basic components/background/index";
import FormLogin from "../src/components/form-login";
import styled from 'styled-components'

interface UserCreds {
  userName: string,
  password: string
}

const initialData: UserCreds = {
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
  max-width: 40rem;
`


export default function Home() {
  return (
    <Container>
      <Content>
        <FormLogin initialData={initialData} handleData={async (values) => {
          console.log(values);
        }} />
      </Content>
      <Background backgroundImage='img/background2.jpg'/>
    </Container>
  )
}