'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import TextArea from '@/components/TextArea/TextArea';
import Separator from '@/components/Separator/Separator';

const TextAreaDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import TextArea from '@/components/TextArea/TextArea'
    
<TextArea darkMode={isDarkMode} placeholder='Enter a message here.' />`;

    const tsxCode = `import { ChangeEvent, CSSProperties, HTMLAttributes, useState } from 'react';
import './TextArea.css';

type TextAreaProps = {
    placeholder: string;
    onChange?: (placeholder: string) => void;
    width?: string | number;
    height?: string | number;
    darkMode?: boolean;
} & HTMLAttributes<HTMLElement>;

const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChange = () => { }, width = '100%', height = '150px', darkMode, ...props }) => {
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const textareaStyle: CSSProperties = {
        width: typeof width === 'number' ? \`\${width}%\` : width,
        height: typeof height === 'number' ? \`\${height}%\` : height,
    };

    return (
        <textarea
        {...props}
            placeholder={placeholder}
            onChange={handleInputChange}
            style={textareaStyle}
            className={\`\${props.className ? props.className : ''} textarea \${darkMode && 'darkMode'}\`}
        />
    );
};

export default TextArea;
`

    const cssCode = `.textarea {
    padding: 10px;
    border: 1px solid #d6d6d6;
    font-size: 14px;
    resize: vertical;
}

.textarea:focus {
    outline: none;
}

/* dark mode */
.darkMode.textarea {
    background-color: #0a0a0a;
    border: 1px solid #494949;
    color: #fff;
}

.darkMode.textarea::placeholder {
    color: #a4a9af;
}

/* Scrollbar */

.textarea::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.textarea::-webkit-scrollbar-track {
    background-color: #e4e4e4;
}

.textarea::-webkit-scrollbar-thumb {
    background-color: rgb(185, 184, 184);
}

/* Darkmode */
.textarea.darkMode {
    border: 1px solid #333333;
}

.textarea.darkMode::-webkit-scrollbar-track {
    background-color: #1f1d1d;
}

.textarea.darkMode::-webkit-scrollbar-thumb {
    background-color: rgb(126, 126, 126);
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextArea from '@/components/TextArea/TextArea';

describe('TextArea Component', () => {
    it('renders correctly', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toBeInTheDocument();
    });

    it('calls onChange when text is entered', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(textareaElement, { target: { value: 'Hello, World!' } });
    expect(onChange).toHaveBeenCalledWith('Hello, World!');
    });

    it('applies darkMode class', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} darkMode />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toHaveClass('darkMode');
    });

    it('sets custom width and height', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    const width = '300px';
    const height = '200px';
    render(<TextArea placeholder={placeholder} onChange={onChange} width={width} height={height} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toHaveStyle(\`width: \${width}; height: \${height};\`);
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 7 / 50</h4>
            <Spacer y={2} />
            <h1>TextArea component</h1>
            <Spacer y={4} />
            <p>Today, I want to introduce a TextArea component that can be easily integrated into any React project. It allows users to select a value from a specified range by dragging a slider handle. Let's dive into its features, installation, usage, props, and code.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/TextArea' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=t_Mkn9QZZmE' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <TextArea darkMode={isDarkMode} placeholder='Enter a message here.' />
                    </div>

                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code'  >
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

export default TextAreaDemo;
