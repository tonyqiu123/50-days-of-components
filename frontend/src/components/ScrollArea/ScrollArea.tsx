import { HTMLAttributes, createContext, useContext, useEffect } from "react";
import './ScrollArea.css'

type ScrollAreaProps = {
    darkMode?: boolean
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const ScrollArea: React.FC<ScrollAreaProps> = ({ darkMode = false, children, ...props }) => {

    return (
        <div className={`scrollArea ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`} {...props}>
            {children}
        </div>
    )
}

export default ScrollArea