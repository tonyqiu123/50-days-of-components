'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Select from '@/components/Select/Select';

const SelectDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [selected1, setSelected1] = useState<string>('')

    const animals = [
        'Cat',
        'Dolphin',
        'Panda',
        'Koala',
        'Horse',
        'Owl',
        'Squirrel',
        'Rabbit',
        'Gorilla',
        'Zebra',
        'Crocodile'
    ];

    const reactCode = `import Select from '@/components/Select/Select';

const [selected1, setSelected1] = useState<string>('')

const animals = [
    'Cat',
    'Dolphin',
    'Panda',
    'Koala',
    'Horse',
    'Owl',
    'Squirrel',
    'Rabbit',
    'Gorilla',
    'Zebra',
    'Crocodile'
];

<Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} /`;

    const tsxCode = `import React, { FC, HTMLAttributes, useState } from 'react';
import './Select.css';
import Button from '../Button/Button';
import Popover from '../Popover/Popover';

type SelectProps = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    darkMode?: boolean;
    queries: string[]
    placeholder?: string
} & HTMLAttributes<HTMLElement>;

const Select: FC<SelectProps> = ({ selected, setSelected, darkMode = false, queries, placeholder = 'Search', ...props }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = (query: string) => {
        setSelected(query);
        setIsOpen(false)
    }

    return (
        <Popover isOpen={isOpen} setIsOpen={setIsOpen} className={\`select \${darkMode ? 'darkMode' : ''}\`} {...props}>
            <Button style={{ width: '100%', justifyContent: 'space-between' }} size='l' darkMode={darkMode} variant='outline' text={selected ? selected : placeholder} imageSrc='/select/arrow.svg' />
            <div className='selectDropdown'>
                {queries.map((query, index) => {
                    return (
                        <p onClick={() => handleOnClick(query)} key={index}>
                            {query}
                        </p>
                    )
                })}
            </div>
        </Popover>
    );
};

export default Select;`

    const cssCode = `.selectDropdown {
    background-color: white;
    width: 100%;
    border: 1px solid #E2E2E2;
    padding: 4px;
}

.selectDropdown>p {
    padding: 8px 16px;
}

.selectDropdown>p:hover {
    background-color: #f8f8f8;
}

/* darkMode */
.darkMode.select>.selectDropdown {
    background-color: black;
    border: 1px solid #313131;
}

.darkMode.select>.selectDropdown>p:hover {
    background-color: #1A1A1A;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Select from '@/components/Select/Select';

describe('Select component', () => {
    const queries = ['Option 1', 'Option 2', 'Option 3'];

    test('renders without errors', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="" setSelected={setSelected} queries={queries} />
    );

    // Assert that the component renders without throwing any errors
    });

    test('displays placeholder when no option is selected', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="" setSelected={setSelected} queries={queries} placeholder="Select an option" />
    );

    const placeholderText = screen.getByText('Select an option');
    expect(placeholderText).toBeInTheDocument();
    });

    test('displays selected option', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="Option 2" setSelected={setSelected} queries={queries} />
    );
    
    const selectedOptions = screen.getAllByText('Option 2');
    expect(selectedOptions.length).toBeGreaterThan(1); // At least 1 element should be present
    });
    

    test('opens dropdown when clicked', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
    });

    test('calls setSelected when an option is clicked', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(setSelected).toHaveBeenCalledWith('Option 2');
    });

    test('closes dropdown after an option is clicked', () => {
    const setSelected = jest.fn();
    render(
        <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    const dropdown = screen.queryByRole('listbox');
    expect(dropdown).not.toBeInTheDocument();
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 39 / 50</h4>
            <Spacer y={2} />
            <h1>Select component</h1>
            <Spacer y={4} />
            <p>The select web development component plays a pivotal role in enhancing user interaction by presenting a dropdown menu that enables users to conveniently choose from a range of options. This intuitive interface element not only simplifies data input but also contributes to a seamless and engaging user experience, making it an indispensable tool for creating dynamic and user-centric web applications.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Select' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=_eCPKuCeCGs' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox' style={{ height: '850px' }}>
                        <Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
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

export default SelectDemo;
