'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Slider from '@/components/Slider/Slider';
import Separator from '@/components/Separator/Separator';

const SliderDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Slider from '@/components/Slider/Slider'
    
<Slider
    min={0}
    max={100}
    defaultValue={50}
    darkMode={isDarkMode}
    onChange={(value) => console.log(value)}
/>`;

    const tsxCode = `import React, { FC, ChangeEvent, useState, HTMLAttributes } from 'react';
import './Slider.css'; // Importing CSS for our slider

type SliderProps = {
    min?: number;
    max?: number;
    defaultValue?: number;
    darkMode?: boolean;
    fullWidth?: boolean;
    onChange?: (value: number) => void;
} & HTMLAttributes<HTMLElement>;

const Slider: FC<SliderProps> = ({ min = 0, max = 100, defaultValue = 0, onChange = () => { }, darkMode = false, fullWidth = false, ...props }) => {

    const [value, setValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    onChange(Number(event.target.value));
    };

    return (
    <input
    {...props}
        type="range"
        className={\`\${props.className ? props.className : ''} \${darkMode && 'darkMode'} \${fullWidth && 'fullWidth'}\`}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
    />
    );
};

export default Slider;
`

    const cssCode = `input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    background: #000000;
    outline: none;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
}

input[type="range"].darkMode {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    background: #fffefe;
    outline: none;
}

input[type="range"].darkMode::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background: #000000;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    cursor: pointer;
}

input[type="range"].fullWidth {
    width: 100%;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from '@/components/Slider/Slider';

describe('Slider Component', () => {
    it('renders with default value', () => {
    const { getByRole } = render(<Slider />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('value', '0');
    });

    it('renders with specified default value', () => {
    const { getByRole } = render(<Slider defaultValue={50} />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('value', '50');
    });

    it('renders with specified min and max values', () => {
    const { getByRole } = render(<Slider min={10} max={90} />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '90');
    });

    it('calls onChange when slider value changes', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Slider onChange={handleChange} />);
    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: '30' } });
    expect(handleChange).toHaveBeenCalledWith(30);
    });

    it('applies dark mode class', () => {
    const { container } = render(<Slider darkMode />);
    const slider = container.querySelector('.darkMode');
    expect(slider).toBeInTheDocument();
    });

    it('applies fullWidth class', () => {
    const { container } = render(<Slider fullWidth />);
    const slider = container.querySelector('.fullWidth');
    expect(slider).toBeInTheDocument();
    });

    // Add more tests as needed
});`

    return (
        <React.Fragment>

            <h4>Day 7 / 50</h4>
            <Spacer y={2} />
            <h1>Slider component</h1>
            <Spacer y={4} />
            <p>Today, I want to introduce a Slider component that can be easily integrated into any React project. It allows users to select a value from a specified range by dragging a slider handle. Let's dive into its features, installation, usage, props, and code.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Slider' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
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
                        <Slider
                            min={0}
                            max={100}
                            defaultValue={50}
                            darkMode={isDarkMode}
                            onChange={(value) => console.log(value)}
                        />
                    </div>

                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code' height={200}>
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

export default SliderDemo;
