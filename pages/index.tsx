import Background from "../src/components/basic components/background/indext";
import Footer from "../src/components/footer";
import { Header, MobileHeader } from "../src/components/header";

export default function Home() {
  return (
    <>
    <Background>
    <Header/>
    <MobileHeader />
    <Footer />
    </Background>
    </>
    )
}