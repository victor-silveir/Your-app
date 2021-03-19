import styled from 'styled-components'
import { NavContainer, NavList, Navlink } from './styles'


function HamburgerNavBar() {
    return (
        <NavContainer>
            <NavList>
                <Navlink>
                    <img src="/img/Hourglass.svg" />
                </Navlink>
                <Navlink>
                    <a>Home</a>
                </Navlink>
                <Navlink>
                    <a>Customers</a>
                </Navlink>
            </NavList>
            <a>Logout</a>
        </NavContainer>
    );
};

export default HamburgerNavBar;