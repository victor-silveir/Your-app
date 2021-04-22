import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import styled from 'styled-components'
import { useAuth } from '../../../hooks/AuthHook';
import { NavContainer, NavList, Navlink } from './styles'


function HamburgerNavBar() {

    const { logout } = useAuth();

    return (
        <NavContainer>
            <NavList>
                <Navlink>
                    <img src="/img/Hourglass.svg" />
                </Navlink>
                <Navlink>
                    <a href="/home">Home</a>
                </Navlink>
                <Navlink>
                    <a href="/customers">Customers</a>
                </Navlink>
            </NavList>
            <a href="https://github.com/victor-silveir"><AiFillGithub size={25} /></a>
            <a href="mailto:vbf.silveira@gmail.com"><FiMail size={25} /></a>
            <a onClick={logout}>Logout</a>
        </NavContainer>
    );
};

export default HamburgerNavBar;