import React, { createContext, useContext, useState, useEffect, useRef, HTMLAttributes, Children, useMemo } from 'react';
import './NavigationMenu.css';
import Image from 'next/image';

const buildObject = (ref: any) => {
    const refObject: any = {}
    refObject['width'] = ref.current.getBoundingClientRect().width
    refObject['left'] = ref.current.getBoundingClientRect().left
    refObject['right'] = ref.current.getBoundingClientRect().right
    refObject['height'] = ref.current.getBoundingClientRect().height
    return refObject
}
type ContextProps = {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
    linkDimensions: any;
    setLinkDimensions: React.Dispatch<React.SetStateAction<any>>;
    dropdownDimensions: any;
    setDropdownDimensions: React.Dispatch<React.SetStateAction<any>>;
    movingWindowRef: any;
};

const initialContextValue: ContextProps = {
    activeLink: '',
    setActiveLink: () => { },
    linkDimensions: {},
    setLinkDimensions: () => { },
    dropdownDimensions: {},
    setDropdownDimensions: () => { },
    movingWindowRef: null,
};

const Context = createContext<ContextProps>(initialContextValue);
const useNavigationMenu = () => useContext(Context);

type NavigationMenuProps = {
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const NavigationMenu: React.FC<NavigationMenuProps> & {
    Link: React.FC<LinkProps>;
    Links: React.FC<LinksProps>;
    MovingWindow: React.FC<MovingWindowProps>;
    Dropdown: React.FC<DropdownProps>;
} = ({ children, darkMode = false, ...props }) => {
    const [activeLink, setActiveLink] = useState('');
    const [linkDimensions, setLinkDimensions] = useState({});
    const [dropdownDimensions, setDropdownDimensions] = useState({});
    const movingWindowRef = useRef(null);

    return (
        <Context.Provider value={{ activeLink, setActiveLink, linkDimensions, dropdownDimensions, movingWindowRef, setLinkDimensions, setDropdownDimensions }}>
            <div {...props} className={`navigationMenu ${darkMode ? 'darkMode' : ''} ${props.className}`}>{children}</div>
        </Context.Provider>
    );
};

type LinksProps = {} & HTMLAttributes<HTMLElement>;

const Links: React.FC<LinksProps> = ({ children, ...props }) => {
    return <div {...props} className={`${props.className} navigationMenuLinks`}>{children}</div>;
};

type LinkProps = {
    linkName: string;
} & HTMLAttributes<HTMLElement>;

const Link: React.FC<LinkProps> = ({ linkName, children, ...props }) => {
    const { activeLink, setActiveLink, dropdownDimensions, setLinkDimensions } = useNavigationMenu();
    const [hasDropdown, setHasDropdown] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dropdownDimensions[linkName]) {
            setHasDropdown(true);
        }
        if (ref.current) {
            setLinkDimensions((prevObj: Record<string, any>) => ({
                ...prevObj,
                [linkName]: buildObject(ref)
            }));
        }
    }, [dropdownDimensions, linkName, activeLink]);



    return (
        <div
            {...props}
            ref={ref}
            style={{ cursor: `${hasDropdown ? 'default' : 'pointer'}` }}
            className={`navigationMenuLink ${activeLink === linkName ? 'active' : ''} ${props.className}`}
            onMouseOver={() => {
                if (hasDropdown) {
                    setActiveLink(linkName)
                }
            }}
            onMouseLeave={() => {
                setActiveLink('')
            }
            }
        >
            {children}
        </div>
    );
};

type MovingWindowProps = {} & HTMLAttributes<HTMLElement>;

const MovingWindow: React.FC<MovingWindowProps> = ({ children, ...props }) => {
    const { linkDimensions, setActiveLink, activeLink, dropdownDimensions, movingWindowRef } = useNavigationMenu();



    useMemo(() => {
        const activeDropdownDimensions = dropdownDimensions[activeLink]
        const activeLinkDimensions = linkDimensions[activeLink]
        if (dropdownDimensions[activeLink] && linkDimensions[activeLink] && movingWindowRef) {
            const movingWindowStyle = movingWindowRef?.current?.style
            const linkRefKeys = Object.keys(linkDimensions);
            const firstLinkRect = linkDimensions[linkRefKeys[0]];
            const lastLinkRect = linkDimensions[linkRefKeys[linkRefKeys.length - 1]];
            const totalWidth = lastLinkRect.left - firstLinkRect.left + lastLinkRect.width


            movingWindowStyle.width = `${activeDropdownDimensions.width}px`;
            movingWindowStyle.height = `${activeDropdownDimensions.height}px`;

            const centeredLeft = activeLinkDimensions.left + activeLinkDimensions.width / 2 - activeDropdownDimensions.width / 2;
            const centeredRight = activeLinkDimensions.right - activeLinkDimensions.width / 2 + activeDropdownDimensions.width / 2;

            // left aligned
            if (activeDropdownDimensions.width > totalWidth || centeredLeft < firstLinkRect.left) {
                movingWindowStyle.transform = 'unset';
            }

            // right aligned
            else if (centeredRight > lastLinkRect.right) {
                movingWindowStyle.transform = `translateX(${totalWidth - activeDropdownDimensions.width}px)`
            }
            // centered aligned
            else {
                movingWindowStyle.transform = `translateX(${activeLinkDimensions.left - firstLinkRect.left + activeLinkDimensions.width / 2 - activeDropdownDimensions.width / 2}px)`
            }

        }
    }, [activeLink, dropdownDimensions, linkDimensions, movingWindowRef]);



    return (
        <div
            {...props}
            onMouseOver={() => setActiveLink(activeLink)}
            ref={movingWindowRef} className={`${props.className} movingWindow ${activeLink === '' ? 'active' : ''}`}>
            {children}
        </div>
    );
};

type DropdownProps = {
    linkName: string;
} & HTMLAttributes<HTMLElement>;

const Dropdown: React.FC<DropdownProps> = ({ linkName, children, ...props }) => {


    const { activeLink, setActiveLink, setLinkDimensions, setDropdownDimensions } = useNavigationMenu();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            setDropdownDimensions((prevObj: Record<string, any>) => ({
                ...prevObj,
                [linkName]: buildObject(ref)
            }));
        }
    }, [linkName, setLinkDimensions]);

    return (
        <div
            {...props}
            ref={ref}
            className={`${props.className} navigationMenuDropdown ${activeLink === linkName ? 'active' : ''}`}
            onMouseOver={() => { if (activeLink === linkName) setActiveLink(linkName) }}
            onMouseLeave={() => setActiveLink('')}
        >
            {children}
        </div>
    );
};


NavigationMenu.Links = Links;
NavigationMenu.Link = Link;
NavigationMenu.Dropdown = Dropdown;
NavigationMenu.MovingWindow = MovingWindow;

export default NavigationMenu;