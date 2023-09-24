'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Sheet from '@/components/Sheet/Sheet';
import Card from '@/components/Card/Card';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Separator from '@/components/Separator/Separator';
import Checkbox from '@/components/Checkbox/Checkbox';

const SheetDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showSheet, setShowSheet] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [search, setSearch] = useState<string>('')
    const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());


    const reactCode = `import Sheet from '@/components/Sheet/Sheet'
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Checkbox from '@/components/Checkbox/Checkbox';


const [showSheet, setShowSheet] = useState(false)
const [input1, setInput1] = useState('')
const [input2, setInput2] = useState('')
const [search, setSearch] = useState<string>('')

const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());

<Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
<Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
    <h3>Example Sheet</h3>
    <p>First Name</p>
    <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
    <p>Last Name</p>
    <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
    <p>Birthday</p>
    <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder='Select Year'
        fullWidth={true}
        darkMode={isDarkMode}
        queries={years}
        maxHeight='500px'
    />
    <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
    <Button
        handleClick={async () => {
            return new Promise<void>(resolve => {
                try {
                    setTimeout(() => {
                        setShowSheet(false);
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
</Sheet>`;

    const tsxCode = `import React, { useState, ReactNode, useEffect, HTMLAttributes } from "react";
import './Sheet.css'
import Icon from "@/components/Icon/Icon";
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

type SheetProps = {
    children: ReactNode;
    darkMode?: boolean;
    showSheet: boolean
    setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
} & HTMLAttributes<HTMLElement>;

const Sheet: React.FC<SheetProps> = ({ children, darkMode = false, showSheet = false, setShowSheet, ...props }) => {

    return (
        <div {...props} className={\`\${props.className ? props.className : ''} sheet \${darkMode && "darkMode"}  \`}>
            <Backdrop darkMode={darkMode} showBackdrop={showSheet} setShowBackdrop={setShowSheet} />
            <Swipeable closeDirection="right" visible={showSheet} setVisible={setShowSheet}>
                <div className={\`sheetContent \${showSheet ? "active" : ''}\`}>
                    <Icon handleClick={() => setShowSheet(false)} width={12} height={12} image='/Sheet/closeIcon.svg' invert={darkMode} />
                    {children}
                </div>
            </Swipeable>
        </div>
    );
};

export default Sheet`

    const cssCode = `.sheetContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px; 
    max-width: 400px; 
    padding: 24px;
    border-left: 1px solid rgb(241, 241, 241);
    background-color: rgb(255, 255, 255);
}

.sheetContent>.icon {
    position: absolute;
    top: 8px; 
    right: 8px;
    padding: 6px;
}

/* darkmode */
.darkMode.sheet .sheetContent {
    border-left: 1px solid rgb(48, 48, 48);
    background-color: rgb(26, 26, 27);
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sheet from '@/components/Sheet/Sheet';

// Mock components used within Sheet
describe('Sheet', () => {
    it('renders without crashing', () => {
    render(
        <Sheet showSheet={false} setShowSheet={() => { }}>
        {/* Test children */}
        </Sheet>
    );
    });

    it('displays children when showSheet is true', () => {
    render(
        <Sheet showSheet={true} setShowSheet={() => { }}>
        <div data-testid="test-children">Test Children</div>
        </Sheet>
    );

    const childrenElement = screen.getByTestId('test-children');
    expect(childrenElement).toBeInTheDocument();
    });

    it('does not display children when showSheet is false', () => {
    render(
        <Sheet showSheet={false} setShowSheet={() => { }}>
        <div data-testid="test-children">Test Children</div>
        </Sheet>
    );

    const childrenElement = screen.queryByTestId('test-children');
    expect(childrenElement).not.toHaveClass('active');
    });

    it('calls setShowSheet(false) when close icon is clicked', () => {
    const setShowSheetMock = jest.fn();
    const { container } = render(
        <Sheet showSheet={true} setShowSheet={setShowSheetMock}>
        {/* Test children */}
        </Sheet>
    );

    const closeIcon = container.querySelector('.icon');
    fireEvent.click(closeIcon);

    expect(setShowSheetMock).toHaveBeenCalledWith(false);
    });

    // Add more test cases as needed
});
`

    return (
        <React.Fragment>

            <h1>Sheet component</h1>
            <Spacer y={4} />
            <p>The sheet component is a crucial user interface design element widely utilized in popular software applications such as Google Sheets for data management, Microsoft Excel for financial analysis, and Adobe XD for planning and prototyping user interfaces. In these varied contexts, it provides a structured, flexible canvas where users can input, modify, and visualize information.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Sheet' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=pUb4ClANeB8' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
                        <Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
                            <h3>Example Sheet</h3>
                            <p>First Name</p>
                            <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
                            <p>Last Name</p>
                            <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
                            <p>Birthday</p>
                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                                placeholder='Select Year'
                                fullWidth={true}
                                darkMode={isDarkMode}
                                queries={years}
                                maxHeight='500px'
                            />
                            <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
                            <Button
                                handleClick={async () => {
                                    return new Promise<void>(resolve => {
                                        try {
                                            setTimeout(() => {
                                                setShowSheet(false);
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
                        </Sheet>
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

export default SheetDemo;
