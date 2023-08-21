import { HTMLAttributes, createContext, useContext, useEffect } from "react";
import './VerticalNavigation.css'

type VerticalNavigationContextType = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const VerticalNavigationContext = createContext<VerticalNavigationContextType>({ selected: '', setSelected: () => { } });

const useVerticalNavigation = () => useContext(VerticalNavigationContext);


type VerticalNavigationProps = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    darkMode?: boolean
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ selected, setSelected, darkMode = false, children, ...props }) => {

    return (
        <VerticalNavigationContext.Provider value={{ selected, setSelected }}>
            <div  {...props} className={`verticalNavigation ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`}>
                {children}
            </div>
        </VerticalNavigationContext.Provider>
    )
}


type VerticalNavigationHeaderProps = {
    text: string
} & HTMLAttributes<HTMLElement>;

export const VerticalNavigationHeader: React.FC<VerticalNavigationHeaderProps> = ({ text, ...props }) => {

    return (
        <p className={`verticalNavigationHeader ${props.className ? props.className : ''}`}  {...props}>
            {text}
        </p>
    )
}


type VerticalNavigationLinkProps = {
    text: string
} & HTMLAttributes<HTMLElement>;

export const VerticalNavigationLink: React.FC<VerticalNavigationLinkProps> = ({ text, ...props }) => {

    const { selected, setSelected } = useVerticalNavigation()

    return (
        <p onClick={() => setSelected(text)} className={`verticalNavigationLink ${props.className ? props.className : ''} ${selected === text ? 'selected' : ''}`} {...props}>
            {text}
        </p>
    )
}
