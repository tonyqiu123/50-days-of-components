'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Switch from '@/components/Switch/Switch';

const SwitchDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [isChecked, setIsChecked] = useState(false)

    const reactCode = `import Switch from '@/components/Switch/Switch';
    
<Switch isChecked={isChecked} setIsChecked={setIsChecked} darkMode={isDarkMode} />`;

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './Switch.css';

type SwitchProps = {
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const Switch: React.FC<SwitchProps> = ({ isChecked, setIsChecked, darkMode = false, ...props }) => {

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
    };

    return (
        <div
            {...props}
            className={\`\${props.className ? props.className : ''} switch \${isChecked ? 'checked' : ''} \${darkMode && 'darkMode'}\`}
            onClick={handleToggle}
        >
            <div
                className={\`slider \${isChecked ? 'checked' : ''}\`}
            />
        </div>
    );
};

export default Switch;
`

    const cssCode = `.switch {
    display: inline-block;
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: 17px;
    background-color: #E2E2E2;
    cursor: pointer; 
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.switch.checked {
    background-color: #1e8beb !important;
}

.slider {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.slider.checked {
    transform: translateX(100%);
}

/* dark mode */
.darkMode.switch {
    background-color: #45464b;
}

.darkMode.switch>.slider {
    background-color: #ffffff;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import Switch from '@/components/Switch/Switch';

describe('Switch component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Switch isChecked={false} setIsChecked={() => {}} />);
        expect(container).toBeInTheDocument();
    });

    it('renders with dark mode class when darkMode prop is true', () => {
        const { container } = render(<Switch isChecked={false} setIsChecked={() => {}} darkMode />);
        expect(container.firstChild).toHaveClass('darkMode');
    });

    it('renders checked class when isChecked prop is true', () => {
        const { container } = render(<Switch isChecked={true} setIsChecked={() => {}} />);
        expect(container.firstChild).toHaveClass('checked');
    });

    it('calls setIsChecked when clicked', () => {
        const setIsCheckedMock = jest.fn();
        const { container } = render(<Switch isChecked={false} setIsChecked={setIsCheckedMock} />);

        fireEvent.click(container.firstChild);
        expect(setIsCheckedMock).toHaveBeenCalledTimes(1);
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 12 / 50</h4>
            <Spacer y={2} />
            <h1>Switch component</h1>
            <Spacer y={4} />
            <p>Switches are often used in settings and preferences. Because they're relatively more animated compared to other components, switches can be a solid choice to make the user experience more enjoyable.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Switch' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=vqeAzYbHaGY' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Switch isChecked={isChecked} setIsChecked={setIsChecked} darkMode={isDarkMode} />
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

export default SwitchDemo;
