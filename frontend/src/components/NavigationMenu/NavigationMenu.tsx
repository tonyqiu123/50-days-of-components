import React, { createContext, useContext, useState, useEffect, useRef, HTMLAttributes, Children, useMemo } from 'react';
import './NavigationMenu.css';

type ContextProps = {
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
    linkRefs: any;
    dropdownRefs: any;
    movingWindowRef: any;
};

const Context = createContext<ContextProps>(null);
const useNavigationMenu = () => useContext(Context);

type NavigationMenuProps = {
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const NavigationMenu: React.FC<NavigationMenuProps> & {
    Item: React.FC<ItemProps>;
    Items: React.FC<ItemsProps>;
    MovingWindow: React.FC<MovingWindowProps>;
    Dropdown: React.FC<DropdownProps>;
} = ({ children, darkMode = false }) => {
    const [activeItem, setActiveItem] = useState('');
    const linkRefs = {};
    const dropdownRefs = {};
    const movingWindowRef = useRef(null);

    return (
        <Context.Provider value={{ activeItem, setActiveItem, linkRefs, dropdownRefs, movingWindowRef }}>
            <div className={`navigationMenu ${darkMode ? 'darkMode' : ''}`}>{children}</div>
        </Context.Provider>
    );
};

type ItemsProps = {} & HTMLAttributes<HTMLElement>;

const Items: React.FC<ItemsProps> = ({ children }) => {
    const { linkRefs } = useNavigationMenu();

    // Create an object to store the refs
    const refs = {};

    // Loop through children and populate refs object
    Children.forEach(children, (child: any) => {
        if (child?.props?.itemName) {
            refs[child.props.itemName] = useRef(null);
        }
    });

    // Update linkRefs with the populated refs object
    linkRefs.current = refs;

    return <div className='navigationMenuItems'>{children}</div>;
};

type ItemProps = {
    itemName: string;
} & HTMLAttributes<HTMLElement>;

const Item: React.FC<ItemProps> = ({ itemName, children }) => {
    const { activeItem, setActiveItem, linkRefs, dropdownRefs } = useNavigationMenu();
    const linkRef = linkRefs[itemName];

    const [hasDropdown, setHasDropdown] = useState(true)

    useEffect(() => {
        if (!dropdownRefs[itemName]) {
            setHasDropdown(false)
        }
    }, [dropdownRefs, itemName])

    return (
        <div
            style={{ cursor: `${hasDropdown ? 'default' : 'pointer'}` }}
            ref={linkRef}
            className={`navigationMenuLink ${activeItem === itemName ? 'active' : ''}`}
            onMouseOver={() => {
                if (hasDropdown) {
                    setActiveItem(itemName)
                }
            }}
            onMouseLeave={() => setActiveItem('')}
        >
            {children}
            {hasDropdown ? <img alt='' src='/NavigationMenu/downArrow.svg' width={14} height={16} /> : null}
        </div>
    );
};

type MovingWindowProps = {} & HTMLAttributes<HTMLElement>;

const MovingWindow: React.FC<MovingWindowProps> = ({ children }) => {
    const { linkRefs, setActiveItem, activeItem, dropdownRefs, movingWindowRef } = useNavigationMenu();

    // Dynamically create dropdownRefs based on children's itemName
    Children.forEach(children, (child: any) => {
        if (child?.props?.itemName) {
            dropdownRefs[child.props.itemName] = useRef(null);
        }
    });

    useMemo(() => {
        const activeDropdownRect = dropdownRefs[activeItem]?.current.getBoundingClientRect();
        const activeLinkRect = linkRefs[activeItem]?.current.getBoundingClientRect();

        if (activeDropdownRect && activeLinkRect) {
            const movingWindowStyle = movingWindowRef?.current.style
            const linkRefKeys = Object.keys(linkRefs);
            const firstLinkRect = linkRefs[linkRefKeys[0]]?.current.getBoundingClientRect();
            const lastLinkRect = linkRefs[linkRefKeys[linkRefKeys.length - 1]]?.current.getBoundingClientRect();
            const totalWidth = lastLinkRect.left - firstLinkRect.left + lastLinkRect.width

            movingWindowStyle.width = `${activeDropdownRect.width}px`;
            movingWindowStyle.height = `${activeDropdownRect.height}px`;

            const centeredLeft = activeLinkRect.left + activeLinkRect.width / 2 - activeDropdownRect.width / 2;
            const centeredRight = activeLinkRect.right - activeLinkRect.width / 2 + activeDropdownRect.width / 2;

            // left aligned
            if (activeDropdownRect.width > totalWidth || centeredLeft < firstLinkRect.left) {
                movingWindowStyle.transform = 'unset';
            }

            // right aligned
            else if (centeredRight > lastLinkRect.right) {
                movingWindowStyle.transform = `translateX(${totalWidth - activeDropdownRect.width}px)`
            }
            // centered aligned
            else {
                movingWindowStyle.transform = `translateX(${activeLinkRect.left - firstLinkRect.left + activeLinkRect.width / 2 - activeDropdownRect.width / 2}px)`
            }

        }
    }, [activeItem, dropdownRefs, linkRefs, movingWindowRef]);



    return (
        <div
            onMouseOver={() => setActiveItem(activeItem)}
            ref={movingWindowRef} className={`movingWindow ${activeItem === '' ? 'active' : ''}`}>
            {children}
        </div>
    );
};

type DropdownProps = {
    itemName: string;
} & HTMLAttributes<HTMLElement>;

const Dropdown: React.FC<DropdownProps> = ({ itemName, children }) => {
    const { activeItem, setActiveItem, dropdownRefs } = useNavigationMenu();
    const dropdownRef = dropdownRefs[itemName];

    return (
        <div
            ref={dropdownRef}
            className={`navigationMenuDropdown ${activeItem === itemName ? 'active' : ''}`}
            onMouseOver={() => { if (activeItem === itemName) setActiveItem(itemName) }}
            onMouseLeave={() => setActiveItem('')}
        >
            {children}
        </div>
    );
};

NavigationMenu.Items = Items;
NavigationMenu.Item = Item;
NavigationMenu.Dropdown = Dropdown;
NavigationMenu.MovingWindow = MovingWindow;

export default NavigationMenu;
