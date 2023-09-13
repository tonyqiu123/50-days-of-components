'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation';
import Separator from '@/components/Separator/Separator';

const VerticalNavigationDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [selected1, setSelected1] = useState<string>('Profile')
    const [selected2, setSelected2] = useState<string>('VerticalNavigation')

    const reactCode = `import VerticalNavigation from '@/components/VerticalNavigation/VerticalNavigation'
    
const [selected1, setSelected1] = useState<string>('Profile')

<VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
    <VerticalNavigationHeader text='Account Settings' />
    <VerticalNavigationLink text='Profile' />
    <VerticalNavigationLink text='Verification' />
    <VerticalNavigationLink text='Trust and Verification' />
    <VerticalNavigationLink text='Security' />
    <VerticalNavigationLink text='Notifications' />
  
    <VerticalNavigationHeader text='Hosting Settings' />
    <VerticalNavigationLink text='Listing Details' />
    <VerticalNavigationLink text='Pricing' />
    <VerticalNavigationLink text='Availability' />
    <VerticalNavigationLink text='Booking Settings' />
    <VerticalNavigationLink text='House Rules' />
  
    <VerticalNavigationHeader text='Guest Settings' />
    <VerticalNavigationLink text='Search Preferences' />
    <VerticalNavigationLink text='Saved Listings' />
    <VerticalNavigationLink text='Wishlists' />
    <VerticalNavigationLink text='Reviews' />
    <VerticalNavigationLink text='Trips' />
  
    <VerticalNavigationHeader text='Payment Settings' />
    <VerticalNavigationLink text='Payment Methods' />
    <VerticalNavigationLink text='Payout Preferences' />
    <VerticalNavigationLink text='Transaction History' />
    <VerticalNavigationLink text='Invoices' />
    <VerticalNavigationLink text='Tax Documents' />
  </VerticalNavigation>`;

    const tsxCode = `import { HTMLAttributes, createContext, useContext, useEffect } from "react";
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
            <div  {...props} className={\`verticalNavigation \${darkMode ? 'darkMode' : ''} \${props.className ? props.className : ''}\`}>
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
        <p className={\`verticalNavigationHeader \${props.className ? props.className : ''}\`}  {...props}>
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
        <p onClick={() => setSelected(text)} className={\`verticalNavigationLink \${props.className ? props.className : ''} \${selected === text ? 'selected' : ''}\`} {...props}>
            {text}
        </p>
    )
}
`

    const cssCode = `.verticalNavigation {
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: space-between;
    background-color: white;
    flex: 0 0 auto;
    height: fit-content;
}

.verticalNavigationHeader {
    font-weight: bold;
    font-size: 12px;
    text-transform: capitalize;
    cursor: default;
    padding: 6px 10px;
    margin-top: 12px;
    width: 100%;
    color: #717171;
}

.verticalNavigationHeader:first-of-type {
    padding-top: 0;
    margin-top: 0;
}

.verticalNavigationLink {
    width: 100%;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 10px;
    opacity: .5;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.verticalNavigationLink:hover,
.selected.verticalNavigationLink {
    background-color: #f8f8f8;
    opacity: 1;
}

/* darkMode */
.darkMode.verticalNavigation {
    background-color: black;
}

.darkMode.verticalNavigation>.verticalNavigationHeader {
    color: #A0A0A0;
}

.darkMode.verticalNavigation>.verticalNavigationLink:hover,
.darkMode.verticalNavigation>.selected.verticalNavigationLink {
    background-color: #313131;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    VerticalNavigation,
    VerticalNavigationHeader,
    VerticalNavigationLink,
} from '@/components/VerticalNavigation/VerticalNavigation'; // Adjust the import path as needed

describe('VerticalNavigation', () => {
    it('renders with default classNames', () => {
        const { container } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <div>Child content</div>
            </VerticalNavigation>
        );
        const navigation = container.querySelector('.verticalNavigation');
        expect(navigation).toBeInTheDocument();
        expect(navigation).not.toHaveClass('darkMode');
    });

    it('renders with darkMode classNames', () => {
        const { container } = render(
            <VerticalNavigation selected="home" setSelected={() => { }} darkMode>
                <div>Child content</div>
            </VerticalNavigation>
        );
        const navigation = container.querySelector('.verticalNavigation');
        expect(navigation).toHaveClass('darkMode');
    });
});

describe('VerticalNavigationLink', () => {
    it('renders with default classNames', () => {
        const { getByText } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <VerticalNavigationLink text="home" />
            </VerticalNavigation>
        );
        const link = getByText('home');
        expect(link).toBeInTheDocument();
        expect(link).toHaveClass('verticalNavigationLink');
        expect(link).toHaveClass('selected');
    });

    it('renders with selected classNames', () => {
        const { getByText } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <VerticalNavigationLink text="home" />
            </VerticalNavigation>
        );
        const link = getByText('home');
        fireEvent.click(link);
        expect(link).toHaveClass('selected');
    });
});

// Similar tests can be written for VerticalNavigationHeader component
`

    return (
        <React.Fragment>

            <h4>Day 42 / 50</h4>
            <Spacer y={2} />
            <h1>VerticalNavigation component</h1>
            <Spacer y={4} />
            <p>The VerticalNavigation component facilitates easy navigation through vertical menus or sections, enhancing user experience by providing a structured and accessible interface for selecting options or browsing content. It typically displays links or buttons vertically, aiding users in quickly accessing different sections or pages of an application or website.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/VerticalNavigation' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=eAro7avGxDA' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
                            <VerticalNavigationHeader text='Account Settings' />
                            <VerticalNavigationLink text='Profile' />
                            <VerticalNavigationLink text='Verification' />
                            <VerticalNavigationLink text='Trust and Verification' />
                            <VerticalNavigationLink text='Security' />
                            <VerticalNavigationLink text='Notifications' />

                            <VerticalNavigationHeader text='Hosting Settings' />
                            <VerticalNavigationLink text='Listing Details' />
                            <VerticalNavigationLink text='Pricing' />
                            <VerticalNavigationLink text='Availability' />
                            <VerticalNavigationLink text='Booking Settings' />
                            <VerticalNavigationLink text='House Rules' />

                            <VerticalNavigationHeader text='Guest Settings' />
                            <VerticalNavigationLink text='Search Preferences' />
                            <VerticalNavigationLink text='Saved Listings' />
                            <VerticalNavigationLink text='Wishlists' />
                            <VerticalNavigationLink text='Reviews' />
                            <VerticalNavigationLink text='Trips' />

                            <VerticalNavigationHeader text='Payment Settings' />
                            <VerticalNavigationLink text='Payment Methods' />
                            <VerticalNavigationLink text='Payout Preferences' />
                            <VerticalNavigationLink text='Transaction History' />
                            <VerticalNavigationLink text='Invoices' />
                            <VerticalNavigationLink text='Tax Documents' />
                        </VerticalNavigation>

                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <VerticalNavigation selected={selected2} setSelected={setSelected2} darkMode={isDarkMode}>
                            <VerticalNavigationHeader text='Components' />
                            <VerticalNavigationLink text='Accordion' />
                            <VerticalNavigationLink text='AspectRatio' />
                            <VerticalNavigationLink text='Backdrop' />
                            <VerticalNavigationLink text='Badge' />
                            <VerticalNavigationLink text='Breadcrumb' />
                            <VerticalNavigationLink text='Checkbox' />
                            <VerticalNavigationLink text='Combobox' />
                            <VerticalNavigationLink text='Command' />
                            <VerticalNavigationLink text='Counter' />
                            <VerticalNavigationLink text='DragNDrop' />
                            <VerticalNavigationLink text='Drawer' />
                            <VerticalNavigationLink text='Dropdown' />
                            <VerticalNavigationLink text='Expandable' />
                            <VerticalNavigationLink text='HoverCard' />
                            <VerticalNavigationLink text='Modal' />
                            <VerticalNavigationLink text='MultiSelect' />
                            <VerticalNavigationLink text='ShowMore' />
                            <VerticalNavigationLink text='Skeleton' />
                            <VerticalNavigationLink text='Switch' />
                            <VerticalNavigationLink text='Table' />
                            <VerticalNavigationLink text='Tabs' />
                            <VerticalNavigationLink text='TextArea' />
                            <VerticalNavigationLink text='Toast' />
                            <VerticalNavigationLink text='Tooltip' />
                            <VerticalNavigationLink text='VerticalNavigation' />
                        </VerticalNavigation>
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

export default VerticalNavigationDemo;
