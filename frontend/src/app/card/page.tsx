'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';

const CardDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [name, setName] = useState('');
    const [search, setSearch] = useState<string>('');

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

    const reactCode = `import Card from '@/components/Card/Card';

    <Card style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} darkMode={isDarkMode}>
    <h2>Create project</h2>
    <p>Deploy your new project in one-click.</p>
    <p style={{ marginTop: '16px' }}>Name</p>
    <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
    <p style={{ marginTop: '16px' }}>Framework</p>
    <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
    <Button style={{ marginTop: '16px' }} darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
</Card>`

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './Card.css'

type CardProps = {
    darkMode?: boolean
    size?: 's' | 'm' | 'l'
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const Card: React.FC<CardProps> = ({ darkMode = false, size = 'm', children, ...props }) => {
    return (
        <div {...props} className={\` \${props.className ? props.className : ''} card \${darkMode ? 'darkMode' : ''} \${size}\`}>
            {children}
        </div>
    )
}

export default Card`

    const cssCode = `.card {
    border: 1px solid #E2E2E2;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
}

.s.card {
    padding: 16px;
}

.m.card {
    padding: 24px;
}

.l.card {
    padding: 32px;
}

/* darkMode */
.darkMode.card {
    border: 1px solid #3a3a3a;
    background-color: #000000;
}`

    const unitTestCode = `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '@/components/Card/Card';

describe('Card Component Tests', () => {
    // Happy Path Test
    it('renders a card with children', () => {
        render(<Card>Test Card</Card>);
        const cardElement = screen.getByText(/Test Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // Edge Cases Test
    test('renders a card with dark mode', () => {
        render(<Card darkMode>Dark Card</Card>);
        const cardElement = screen.getByText(/Dark Card/i);
        expect(cardElement).toHaveClass('darkMode');
    });

    // Error Handling Test
    test('renders a card with custom className', () => {
        render(<Card className="custom">Custom Card</Card>);
        const cardElement = screen.getByText(/Custom Card/i);
        expect(cardElement).toHaveClass('custom');
    });

    // Branches and Conditions Test
    test('renders a card with small size', () => {
        render(<Card size="s">Small Card</Card>);
        const cardElement = screen.getByText(/Small Card/i);
        expect(cardElement).toHaveClass('s');
    });

    // Boundary Values Test
    test('renders a card with large size', () => {
        render(<Card size="l">Large Card</Card>);
        const cardElement = screen.getByText(/Large Card/i);
        expect(cardElement).toHaveClass('l');
    });

    // Null and Undefined Test
    test('renders a card without props', () => {
        render(<Card>Null Props Card</Card>);
        const cardElement = screen.getByText(/Null Props Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // Async Operations Test
    test('renders a card asynchronously', async () => {
        render(<Card>Async Card</Card>);
        const cardElement = await screen.findByText(/Async Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // State Changes Test
    test('toggles dark mode', () => {
        render(<Card darkMode>Toggle Dark Card</Card>);
        const cardElement = screen.getByText(/Toggle Dark Card/i);
        userEvent.click(cardElement);
        expect(cardElement).toHaveClass('card');
    });

    // Performance Test
    test('renders multiple cards efficiently', () => {
        const { container } = render(
            <div>
                <Card>Card 1</Card>
                <Card>Card 2</Card>
                <Card>Card 3</Card>
            </div>
        );
        const cardElements = container.querySelectorAll('.card');
        expect(cardElements.length).toBe(3);
    });

});    
`

    return (
        <React.Fragment>

            <h4>Day 35 / 50</h4>
            <Spacer y={2} />
            <h1>Card component</h1>
            <Spacer y={4} />
            <p>The card component elegantly structures and presents content, offering an organized format for displaying information or data. Its versatility makes it a valuable tool for creating visually appealing user interfaces.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Card' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=CQMOWi0HVhQ' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Card style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} darkMode={isDarkMode}>
                            <h2>Create project</h2>
                            <p>Deploy your new project in one-click.</p>
                            <p style={{ marginTop: '16px' }}>Name</p>
                            <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
                            <p style={{ marginTop: '16px' }}>Framework</p>
                            <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
                            <Button style={{ marginTop: '16px' }} darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={300} darkMode={isDarkMode}>
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

export default CardDemo;
