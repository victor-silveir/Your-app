import { useState } from "react";
import { MenuToggle } from "./menuToggle";
import HamburgerNavBar from "./hamburguerNavBar";
import { HamburgerMenuContainer, Container  } from './styles'


const menuVariants = {
    open: {
        transform: "translateX(0%)"
    },
    closed: {
        transform: "translateX(-100%)"
    },
};

const menuTransition = { type: "spring", duration: 0.5, stiffness: 30, delay: 0};


 function HamburgerMenu(props) {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <HamburgerMenuContainer>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <Container animate={isOpen ? "open" : "closed"} initial={false} variants={menuVariants} transition={menuTransition}>
                <HamburgerNavBar />
            </Container>
        </HamburgerMenuContainer>
    );
};

export default HamburgerMenu;