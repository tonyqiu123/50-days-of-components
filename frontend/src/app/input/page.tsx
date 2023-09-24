'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Input from '@/components/Input/Input';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';

const InputDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [inputText, setInputText] = useState('');

    const reactCode = `import Input from '@/components/Input/Input';

<Input
    darkMode={true}
    placeHolder='Search'
    text={inputText}
    setText={setInputText}
  /> `;

    const tsxCode = `import React, { useState, InputHTMLAttributes, HTMLAttributes } from 'react';
import './Input.css';
import Image from 'next/image';

type InputProps = {
    placeHolder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    iconSrc?: string;
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>;
} & HTMLAttributes<HTMLElement>

const Input: React.FC<InputProps> = ({ search, setSearch, placeHolder = '', darkMode = false, fullWidth, iconSrc, ...props }) => {

    return (
        <div {...props} className={'inputContainer'}>
            {iconSrc && <Image alt='' width={16} height={16} src={iconSrc} />}
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeHolder} className={\`\${props.className ? props.className : ''} input \${darkMode ? 'darkMode' : ''} \${iconSrc ? 'inputWithImg' : ''} \${fullWidth ? 'fullWidth' : ''}\`} type="text" />
        </div>
    );
};

export default Input;
`

    const cssCode = `.inputContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

.inputContainer > img {
    position: absolute;
    top: 50%;
    transform: translate(12px ,-50%);
}

.input.inputWithImg {
    padding-left: 36px; 
}

.input {
    font-size: 14px;
    border: 1px solid #d4d4d4;
    padding: 8px 12px;  
    min-width: 320px;   
}

.input:focus {
outline: 1px solid #d4d4d4; 
}

.input.fullWidth {
width: 100%;    
}

.input.darkMode {
    color: white;
    border: 1px solid #313131;
    background-color: rgb(0, 0, 0);
}

.input.darkMode:focus {
    color: white;
    outline: 1px solid #313131;
}

.input.darkMode::placeholder {
    color: #A0A0A0;     
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@/components/Input/Input';

describe('Input Component', () => {
    it('renders input with placeholder and value', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
        <Input placeHolder="Search..." search="Example" setSearch={() => { }} />
    );

    const inputWithPlaceholder = getByPlaceholderText('Search...');
    const inputWithDisplayValue = getByDisplayValue('Example');

    expect(inputWithPlaceholder).toBeInTheDocument();
    expect(inputWithDisplayValue).toBeInTheDocument();
    });

    it('invokes setSearch function on input change', () => {
    const mockSetSearch = jest.fn();
    const { getByPlaceholderText } = render(
        <Input placeHolder="Search..." search="" setSearch={mockSetSearch} />
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(mockSetSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSearch).toHaveBeenCalledWith('New Value');
    });

    it('applies darkMode class when darkMode prop is true', () => {
    const { container } = render(
        <Input placeHolder="Search..." search="" setSearch={() => { }} darkMode={true} />
    );

    const inputContainer = container.querySelector('.input');
    expect(inputContainer).toHaveClass('darkMode');
    });

    it('renders input with icon when iconSrc prop is provided', () => {
    const { container } = render(
        <Input placeHolder="Search..." search="" setSearch={() => { }} iconSrc="/path/to/icon.png" />
    );

    const iconImage = container.querySelector('img');
    expect(iconImage).toBeInTheDocument();
    });

    it('renders input with fullWidth class when fullWidth prop is true', () => {
    const { container } = render(
        <Input placeHolder="Search..." search="" setSearch={() => { }} fullWidth={true} />
    );

    const inputContainer = container.querySelector('.input');
    expect(inputContainer).toHaveClass('fullWidth');
    });

    // Add more test cases as needed
});
`

    return (
        <React.Fragment>

            <h1>Input component</h1>
            <Spacer y={4} />
            <p>This is a customizable Input component that can be easily integrated into any React project. It provides an input field with the ability to toggle between dark and light modes.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Input' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=Al1uSRnARyQ' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Input darkMode={isDarkMode} search={inputText} setSearch={setInputText} placeHolder='Name of your project' />
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

export default InputDemo;
