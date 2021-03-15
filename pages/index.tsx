import Background from "../src/components/basic components/background/indext";
import Footer from "../src/components/footer";
import FormLogin from "../src/components/form-login";
import { Header, MobileHeader } from "../src/components/header";

interface UserCreds {
  userName: string,
  password: string
}

const initialData: UserCreds = {
  userName: '',
  password: ''
}


export default function Home() {
  return (
    <>
    <FormLogin initialData={initialData} onSubmit={async (values) => {
      console.log(values);
    }}/>
    <Background backgroundImage="img/HomeBackground.jpg" />
    </>
    )
}