import { motion } from "framer-motion";
import Background from "../../src/components/basic components/background/index";
import Footer from "../../src/components/footer";
import { Header, MobileHeader } from "../../src/components/header";
import styled from 'styled-components'
import Head from "../../src/infra/head";

const Content = styled.section`
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



function Home() {
    return (
        <>
            <Head title="YourApp | Home" />
            <Background fixed backgroundImage='/img/background2.jpg'>
                <Header />
                <MobileHeader />
                <Content>
                    <motion.h1 animate={{ color: "#ff9000" }} transition={{ duration: 1 }}>Welcome to Your App!</motion.h1>
                    <p>Use this application to control your company's customer information.</p>
                    <br></br>
                    <p>To use the application, go to <a href='/customers'>customers</a> section!</p>
                </Content>
                <Footer isfixed />
            </Background>
        </>
    )
};

export default Home;