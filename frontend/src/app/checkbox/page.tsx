'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Checkbox from '@/components/Checkbox/Checkbox';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const CheckboxDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const exampleFunction = async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
                    resolve();
                }, 500);
            } catch (error) {
                console.error(error);
                throw error;
            }
        });
    };

    const reactCode = `import Checkbox from '@/components/Checkbox/Checkbox';

<Checkbox darkMode={isDarkMode} primaryText='Accept terms and conditions' />`

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './Checkbox.css';
import Image from 'next/image';

type CheckboxProps = {
    primaryText: string;
    subText?: string;
    onChange?: (checked: boolean) => void;
    darkMode?: boolean;
} & HTMLAttributes<HTMLElement>

const Checkbox: React.FC<CheckboxProps> = ({
    primaryText,
    subText = '',
    onChange = () => { },
    darkMode = false,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(!isChecked);
        onChange(newCheckedState);
    };

    return (
        <label {...props} className={\`\${props.className ? props.className : ''} \${darkMode && 'darkMode'} checkbox-container\`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className='checkmark'>
                <Image width={10} height={10} src='/Checkbox/checkmark.svg' alt='checkmark' />
            </div>
            <div className="text-container">
                <p className="primary-text">{primaryText}</p>
                {subText && <p className="sub-text">{subText}</p>}
            </div>
        </label>

    );
};

export default Checkbox;
`

    const cssCode = `/* Checkbox.css */
.checkbox-container {
    display: flex;
    cursor: pointer;
}

.checkbox-container input {
    display: none;
}

.checkbox-container>.checkmark {
    display: flex;
    border: 1px solid black;
    margin-right: 8px;
    margin-top: 1px;
    width: 16px;
    height: 16px;
}

.checkbox-container>.checkmark>img {
    margin: auto;
}

.checkbox-container>input:checked~.checkmark {
    background-color: black;
}

.checkbox-container .text-container .primary-text {
    font-weight: 500;
    margin-bottom: 4px;
}

.checkbox-container .text-container .sub-text {
    font-size: 0.8em;
    color: #717171;
}

/* dark mode */

.darkMode.checkbox-container .text-container .primary-text {
    color: rgb(227, 228, 233);
}

.darkMode.checkbox-container .text-container .sub-text {
    color: rgb(146, 149, 160);
}

.darkMode.checkbox-container>.checkmark {
    border: 1px solid white;
}

.darkMode.checkbox-container>.checkmark>img {
    filter: brightness(0)
}

.darkMode.checkbox-container>input:checked~.checkmark {
    background-color: rgb(255, 255, 255);
}`

    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '@/components/Checkbox/Checkbox';

describe('Checkbox Component', () => {
    it('renders with primary text', () => {
    const { getByText } = render(<Checkbox primaryText="Checkbox Text" />);
    const primaryTextElement = getByText('Checkbox Text');

    expect(primaryTextElement).toBeInTheDocument();
    });

    it('renders with primary and sub text', () => {
    const { getByText } = render(<Checkbox primaryText="Primary Text" subText="Sub Text" />);
    const primaryTextElement = getByText('Primary Text');
    const subTextElement = getByText('Sub Text');

    expect(primaryTextElement).toBeInTheDocument();
    expect(subTextElement).toBeInTheDocument();
    });

    it('calls onChange when checkbox is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Checkbox primaryText="Checkbox Text" onChange={mockOnChange} />);
    const checkboxElement = getByRole('checkbox');

    fireEvent.click(checkboxElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(checkboxElement).toBeChecked();
    });

    it('renders with dark mode', () => {
    const { container } = render(<Checkbox primaryText="Checkbox Text" darkMode />);
    const checkboxContainer = container.querySelector('.checkbox-container');

    expect(checkboxContainer).toHaveClass('darkMode');
    });

    // Add more test cases as needed
});

`

    return (
        <React.Fragment>

            <h1>Checkbox component</h1>
            <Spacer y={4} />
            <p>A Next.js checkbox component. Checkboxes are often used in forms to get consent from users. I implemented custom styling on the checkbox, so feel free to add further customization in your project.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Checkbox' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=cXnAICsWmyA' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Checkbox darkMode={isDarkMode} primaryText='Accept terms and conditions' />
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

export default CheckboxDemo;
