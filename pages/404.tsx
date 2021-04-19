import { motion } from "framer-motion";
import Background from "../src/components/basic components/background";
import Footer from "../src/components/footer";
import { Header, MobileHeader } from "../src/components/header";
import styled from 'styled-components'

const Content = styled.div`
    overflow-x: hidden;
    max-width: 90rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
;
    margin: 0 auto;
    padding: 0 auto;
    h1 {
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 1rem;
        font-weight: 600;
        transition: 0.3s ease;

        &:hover {
            color: #ff9000;
        }
    }


    p {
        color: #ffffff;
        font-size: 1rem;
        text-align: justify;
        font-weight: 600;
    }

    a{
        text-decoration: none;
        color: #ff9000;

    }
    @media(max-width: 90rem){
    }
    
    @media(max-width: 45rem){
        width: auto;
        max-width: auto;
  
        h1{
            font-size: 1.8rem;
            text-align: center;
        }

        p{
            font-size: 1rem;
            text-align: center;
        }
    }


`


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
            <Footer />
        </Background>
    )
};

export default notFound;