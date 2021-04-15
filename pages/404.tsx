import { motion } from "framer-motion";
import Background from "../src/components/basic components/background";
import { Header, MobileHeader } from "../src/components/header";
import { Content } from "./home/styles";


function notFound() {
    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
                <Header />
                <MobileHeader />
            <Content>
            <motion.h1 animate={{ color: "#ff9000" }} transition={{ duration: 1 }}>404 - Page Not Found!</motion.h1>
                        <h2>We can't find the page that you are looking for  </h2>
                        <br></br>
                        <h2>Return <a href='/home'>Home</a> !</h2>
            </Content>
        </Background>
    )
};

export default notFound;