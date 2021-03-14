import { Headr, Navbar, NavMenu, NavLogo, NavItens, MHeadr } from './styles'

export function Header() {
    return (
        <Headr>
            <Navbar>
                <NavMenu>
                    <NavLogo src="/img/Hourglass.svg"></NavLogo>
                    <NavItens>Home</NavItens>
                    <NavItens>Clientes</NavItens>
                </NavMenu>
                <NavItens>Login</NavItens>
            </Navbar>
        </Headr>
    )
}


