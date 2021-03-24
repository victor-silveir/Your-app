import { useAuth } from '../../hooks/AuthHook'
import HamburgerMenu from './MenuHamburger'
import { Headr, Navbar, NavMenu, NavLogo, NavItens, MHeadr } from './styles'

export function Header() {

    const { logout } = useAuth();

    return (
        <Headr>
            <Navbar>
                <NavMenu>
                    <NavLogo src="/img/Hourglass.svg"></NavLogo>
                    <NavItens href="/home">Home</NavItens>
                    <NavItens href="/customers">Clientes</NavItens>
                </NavMenu>
                <NavItens onClick={logout}>Logout</NavItens>
            </Navbar>
        </Headr>
    )
}

export function MobileHeader() {
    return (
        <MHeadr>
            <HamburgerMenu />
        </MHeadr>
    )
}


