import { motion } from "framer-motion";
import Background from "../../src/components/basic components/background/index";
import { Header, MobileHeader } from "../../src/components/header";
import { Content } from './styles';


function Home() {
    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
                <Header />
                <MobileHeader />
            <Content>
            <motion.h1 animate={{ color: "#ff9000" }} transition={{ duration: 1 }}>Welcome to Your App!</motion.h1>
                        <p>Use this application to control your company's customer information.</p>
                        <br></br>
                        <p>To use the application, go to <a href='/customers'>customers</a> section!</p>
            </Content>
        </Background>
    )
};

export default Home;