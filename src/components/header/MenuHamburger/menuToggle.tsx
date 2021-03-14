import { motion } from 'framer-motion'
import { HamburgerButton } from './styles'
const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="3"
        {...props}    
    />
)


export function MenuToggle({toggle, isOpen}) {
    return (
        <HamburgerButton onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
            <Path animate={isOpen ? "open" : "closed"} initial={false} variants={{ 
                closed: {transform: 'rotate(-10 50 100)', d: "M 2 2.5 L 20 2.5", stroke: "#ffffff"},
                open: { d: "M 3 16.5 L 17 2.5", stroke: "#ff9000"}
            }} transition={{duration: 0.5}} />
            <Path d="M 2 9.423 L 20 9.423"
                animate={isOpen ? "open" : "closed"} initial={false} variants={{ 
                closed: { opacity: 1, stroke: "#ffffff"},
                open: { opacity: 0 }
            }} transition={{duration: 0.1}}/>
            <Path animate={isOpen ? "open" : "closed"} initial={false} variants={{ 
                closed: { d: "M 2 16.346 L 20 16.346", stroke: "#ffffff"},
                open: { d: "M 3 2.5 L 17 16.346", stroke: "#ff9000"}
            }} transition={{duration: 0.5}}/>
            </svg>
        </HamburgerButton>
    )
}