'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Counter from '@/components/Counter/Counter';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const CounterDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import Counter from '@/components/Counter/Counter';
    
<Counter target={110} increment={2} duration={750} />`

    const tsxCode = `import React, { useRef, useState, useEffect, HTMLAttributes } from "react";

type CounterProps = {
    target: number;
    increment?: number;
    duration?: number;
} & HTMLAttributes<HTMLElement>

const Counter: React.FC<CounterProps> = ({ target = 100, increment = 1, duration = 1000, ...props }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const numberRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!numberRef.current) return;

        let startValue = 0;
        const steps = Math.ceil(target / increment);
        const interval = setInterval(() => {
            if (startValue >= target) {
                clearInterval(interval);
            } else {
                startValue += increment;
                setCurrentValue(startValue);
            }
        }, duration / steps);

        return () => {
            clearInterval(interval);
        };
    }, [target, increment, duration]);

    return (
        <h1 className={\`\${props.className ? props.className : ''}\`}  ref={numberRef}>{currentValue}</h1>
    );
};

export default Counter;`

    const unitTestCode = `import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Counter from '@/components/Counter/Counter';

describe('Counter component', () => {
    it('renders with default props', () => {
    render(<Counter target={10} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
    });

    it('renders with custom target', () => {
    render(<Counter target={50} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
        const updatedCounterElement = screen.getByText('50');
        expect(updatedCounterElement).toBeInTheDocument();
    });
    });

    it('renders with custom increment and duration', () => {
    render(<Counter target={100} increment={5} duration={2000} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
        const updatedCounterElement = screen.getByText('100');
        expect(updatedCounterElement).toBeInTheDocument();
    });
    });

    it('renders with custom class name', () => {
    render(<Counter target={75} className="custom-counter" />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
        const updatedCounterElement = screen.getByText('75');
        expect(updatedCounterElement).toBeInTheDocument();
        expect(counterElement).toHaveClass('custom-counter');
    });
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 30 / 50</h4>
            <Spacer y={2} />
            <h1>Counter component</h1>
            <Spacer y={4} />
            <p>The Counter component is a customizable React element that animates incrementing from a starting value to a target value, displaying the changing numerical count with a specified speed and duration. It offers flexibility through props such as 'increment', 'duration', and 'className', making it adaptable for various interactive applications and user interfaces.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Counter' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=8d89PH6ExMc' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Counter target={110} increment={2} duration={750} />
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
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
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

export default CounterDemo;
