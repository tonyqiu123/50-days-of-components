'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';

const NavBarDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();  

    const reactCode = `import { NavBar, NavBarLeft, NavBarRight } from '@/components/NavBar/NavBar';'

<NavBar darkMode={isDarkMode}>
    <NavBarLeft>
        <h1>Logo</h1>
    </NavBarLeft>
    <NavBarRight>
        <h1>Links</h1>
    </NavBarRight>
</NavBar>`;

    const tsxCode = `import React, { createContext, useContext, useState } from 'react';
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
            <div className={\`navbar \${darkMode && 'darkMode'}\`}>

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
        <nav className={\`navbarLeft \${darkMode && 'darkMode'}\`}>
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
        <nav className={\`navbarRight \${darkMode && 'darkMode'}\`}>
            {children}
        </nav>
    );
};`

    const cssCode = `.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 24px;
    background-color: white;
    z-index: 900;
}

.navbarLeft {
    font-weight: 500;
    gap: 24px;
    display: flex;
    align-items: center;
}
.navbarRight {
    gap: 4px;
    display: flex;
    align-items: center;
}

/* darkMode */
.darkMode.navbarLeft > img {
    filter: invert(1)
}
.darkMode.navbar {
    border-bottom: 1px solid #313131;
}
.darkMode.navbar {
    background-color: black;
}`


    const unitTestCode = `import React from 'react';
import { render } from '@testing-library/react';
import { NavBar, NavBarLeft, NavBarRight, useNavbar } from '@/components/NavBar/NavBar';

describe('NavBar Components', () => {
    it('renders NavBar with children', () => {
    const { getByText } = render(
        <NavBar>
        <p>Navbar Content</p>
        </NavBar>
    );

    const content = getByText('Navbar Content');
    expect(content).toBeInTheDocument();
    });

    it('renders NavBarLeft with children', () => {
    const { getByText } = render(
        <NavBarLeft>
        <p>Left Content</p>
        </NavBarLeft>
    );

    const content = getByText('Left Content');
    expect(content).toBeInTheDocument();
    });

    it('renders NavBarRight with children', () => {
    const { getByText } = render(
        <NavBarRight>
        <p>Right Content</p>
        </NavBarRight>
    );

    const content = getByText('Right Content');
    expect(content).toBeInTheDocument();
    });

    it('uses NavbarContext in NavBarLeft', () => {
    const { getByTestId } = render(
        <NavBarLeft>
        <p data-testid="navbar-left">Left Content</p>
        </NavBarLeft>
    );

    const content = getByTestId('navbar-left');
    expect(content).not.toHaveClass('darkMode');
    });

    it('uses NavbarContext in NavBarRight', () => {
    const { getByTestId } = render(
        <NavBarRight>
        <p data-testid="navbar-right">Right Content</p>
        </NavBarRight>
    );

    const content = getByTestId('navbar-right');
    expect(content).not.toHaveClass('darkMode');
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h1>NavBar component</h1>
            <Spacer y={4} />
            <p>A simple navigation bar with a left and right child component.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/NavBar' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                       
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />
            <h1>Component Code</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
                <TabsTrigger value='css'><p>css</p></TabsTrigger>
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='css'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='css' code={cssCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='test'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={unitTestCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default NavBarDemo;
