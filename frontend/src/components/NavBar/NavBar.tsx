import React, { createContext, useContext, useState } from 'react';
import './NavBar.css';

interface NavbarContextType {
    darkMode: boolean
}

const NavbarContext = createContext<NavbarContextType>({ darkMode: false });

export const useNavbar = () => useContext(NavbarContext);

type NavBarProps = {
    children: React.ReactNode
    darkMode?: boolean
};

export const NavBar: React.FC<NavBarProps> = ({ children, darkMode = false }) => {

    return (
        <NavbarContext.Provider value={{ darkMode }}>
            <div className={`navbar ${darkMode && 'darkMode'}`}>

                {children}
            </div>
        </NavbarContext.Provider>
    );
};

type NavBarLeftProps = {
    children: React.ReactNode
};

export const NavBarLeft: React.FC<NavBarLeftProps> = ({ children }) => {

    const { darkMode } = useNavbar()

    return (
        <nav className={`navbarLeft ${darkMode && 'darkMode'}`}>
            {children}
        </nav>
    );
};

type NavBarRightProps = {
    children: React.ReactNode
};

export const NavBarRight: React.FC<NavBarRightProps> = ({ children }) => {
    
    const { darkMode } = useNavbar()
    return (
        <nav className={`navbarRight ${darkMode && 'darkMode'}`}>
            {children}
        </nav>
    );
};