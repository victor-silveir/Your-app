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
                    <a>Home</a>
                </Navlink>
                <Navlink>
                    <a>Customers</a>
                </Navlink>
            </NavList>
            <a onClick={logout}>Logout</a>
        </NavContainer>
    );
};

export default HamburgerNavBar;