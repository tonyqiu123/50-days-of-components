'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Drawer from '@/components/Drawer/Drawer';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const DrawerDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showDrawer, setShowDrawer] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const reactCode = `import Drawer from '@/components/Drawer/Drawer';

<Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
    <h3>Example Drawer</h3>
    <p>First Name</p>
    <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
    <p>Last Name</p>
    <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
    <p>Birthday</p>
    <SearchBar
        placeholder='Select Year'
        fullWidth={true}
        darkMode={isDarkMode}
        queries={years}
        maxHeight='500px'
    />
    <Button
        handleClick={async () => {
            return new Promise<void>(resolve => {
                try {
                    setTimeout(() => {
                        setShowDrawer(false);
                        resolve();
                    }, 500);
                } catch (error) {
                    console.error(error);
                    throw error
                }
            });
        }}
        variant='primary'
        text='Save changes'
    />
</Drawer>`;

    const tsxCode = `import React, { HTMLAttributes, ReactNode } from "react";
import './Drawer.css'
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

type DrawerProps = {
    children: ReactNode;
    darkMode?: boolean;
    showDrawer: boolean
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>; 
} & HTMLAttributes<HTMLElement>

const Drawer: React.FC<DrawerProps> = ({ children, darkMode = false, showDrawer = false, setShowDrawer, ...props}) => {

    return (
    <div {...props} className={\`drawer \${darkMode && "darkMode"} \${props.className ? props.className : ''}\`}>
        <Backdrop darkMode={darkMode} showBackdrop={showDrawer} setShowBackdrop={setShowDrawer} />
        <Swipeable className='drawerContent' closeDirection="down" visible={showDrawer} setVisible={setShowDrawer}>
        {children}
        </Swipeable>
    </div>
    );
};

export default Drawer`

    const cssCode = `.drawerContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px;
    background-color: rgb(255, 255, 255);
  }
  
  /* darkmode */
  .darkMode .drawer .drawerContent {
    background-color: rgb(0, 0, 0);
  }
  `


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Drawer from '@/components/Drawer/Drawer';

describe('Drawer Component', () => {
    it('renders children when showDrawer is true', () => {
    const { getByText } = render(
        <Drawer showDrawer={true} setShowDrawer={() => {}}>
        <p>Drawer Content</p>
        </Drawer>
    );

    const drawerContent = getByText('Drawer Content');
    expect(drawerContent).toBeInTheDocument();
    });

    it('calls setShowDrawer when Backdrop is clicked', () => {
    const mockSetShowDrawer = jest.fn();
    const { container } = render(
        <Drawer showDrawer={true} setShowDrawer={mockSetShowDrawer}>
        <p>Drawer Content</p>
        </Drawer>
    );

    const backdrop = container.querySelector('.backdrop');
    fireEvent.click(backdrop);

    expect(mockSetShowDrawer).toHaveBeenCalledTimes(1);
    expect(mockSetShowDrawer).toHaveBeenCalledWith(false);
    });

    it('applies darkMode class when darkMode prop is true', () => {
    const { container } = render(
        <Drawer showDrawer={true} setShowDrawer={() => {}} darkMode={true}>
        <p>Drawer Content</p>
        </Drawer>
    );

    const drawer = container.querySelector('.drawer');
    expect(drawer).toHaveClass('darkMode');
    });

    it('does not apply darkMode class when darkMode prop is false', () => {
    const { container } = render(
        <Drawer showDrawer={true} setShowDrawer={() => {}} darkMode={false}>
        <p>Drawer Content</p>
        </Drawer>
    );

    const drawer = container.querySelector('.drawer');
    expect(drawer).not.toHaveClass('darkMode');
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 29 / 50</h4>
            <Spacer y={2} />
            <h1>Drawer component</h1>
            <Spacer y={4} />
            <p>The drawer component provides a versatile and user-friendly interface element, often used for presenting supplementary content, menus, or controls. Its intuitive sliding motion and customizable design make it an effective tool for enhancing user interactions within a web or app interface.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Drawer' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=9gqlq7rqHrg' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button handleClick={async () => setShowDrawer(true)} variant='secondary' darkMode={isDarkMode} text='Open drawer' />
                        <Drawer className='drawerDemo' setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
                            <h3>Example Drawer</h3>
                            <p></p>
                            <p>First Name</p>
                            <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
                            <p>Last Name</p>
                            <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
                            <p></p>
                            <Button
                                handleClick={async () => {
                                    return new Promise<void>(resolve => {
                                        try {
                                            setTimeout(() => {
                                                setShowDrawer(false);
                                                resolve();
                                            }, 500);
                                        } catch (error) {
                                            console.error(error);
                                            throw error
                                        }
                                    });
                                }}
                                variant='primary'
                                text='Save changes'
                            />
                        </Drawer>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

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

export default DrawerDemo;
