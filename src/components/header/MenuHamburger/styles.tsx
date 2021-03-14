import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-space-between;
    width: 100%;
    align-items: center;
`

export const NavList = styled.ul`
    padding: 0 auto;
    margin-bottom: 13rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Navlink = styled.li`
    font-size: 1.125rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    a {
        text-decoration: none;
    }

    & + li {
        margin-top: 1rem;
    }
`

export const HamburgerMenuContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Container = styled(motion.div)`
    max-width: 50px;
    width: 200px;
    min-width: 10%;
    height: 100%;
    background-color: #232129;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem, 2.5 rem;   max-width: 300px;  
`

export const HamburgerButton = styled.div`
    z-index: 9999999;
    left: 0;
    top: 0;
    cursor: pointer;
    margin: 20px;
`