'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command'
import ScrollArea from '@/components/ScrollArea/ScrollArea';
import Button from '@/components/Button/Button';

const MultiSelectDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [selected1, setSelected1] = useState<string[]>([])
    const [selected2, setSelected2] = useState<string[]>([])

    const languages = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Ruby",
        "Swift",
        "PHP",
        "C#",
        "TypeScript",
        "Go",
        "Rust",
        "Kotlin"
    ];

    const reactCode = `import MultiSelect from '@/components/MultiSelect/MultiSelect'

<MultiSelect selected={selected2} setSelected={setSelected2} queries={languages} darkMode={isDarkMode} />`;

    const tsxCode = `import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import './MultiSelect.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import Input from '../Input/Input';
import Image from 'next/image';

type MultiSelectProps = {
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
    darkMode?: boolean;
    queries?: string[]
    placeholder?: string
} & HTMLAttributes<HTMLElement>;

const MultiSelect: FC<MultiSelectProps> = ({ selected, setSelected, darkMode = false, queries, placeholder = 'Search', ...props }) => {

    const [search, setSearch] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleSelect = () => {
        // validate the search input

        // searchbar validation
        if (queries) {
            if (!queries.includes(search)) {
                setError('Not found within list')
            }
            else if (search === '') {
                setError('Cannot be empty')
            }
            else if (selected.includes(search)) {
                setError('Duplicate')
            }
            else {
                setSelected(prev => [...prev, search])
            }
        }

        // no search bar validation
        else if (search === '') {
            setError('Cannot be empty')
        }
        else if (selected.includes(search)) {
            setError('Duplicate')
        }
        else {
            setSelected(prev => [...prev, search])
        }
    }

    const handleDelete = (selectedToDelete: string) => {
        setSelected(prev => prev.filter(item => item !== selectedToDelete));
    }

    useEffect(() => {
        setError('')
    }, [search])


    return (
        <div className={\`multiSelect \${darkMode ? 'darkMode' : ''}\`} {...props}>
            <div className='multiSelectRow'>
                {queries ?
                    <SearchBar search={search} setSearch={setSearch} placeholder={placeholder} darkMode={darkMode} queries={queries} />
                    :
                    <Input darkMode={darkMode} search={search} setSearch={setSearch} placeHolder={placeholder} />
                }
                <p onClick={handleSelect}>Add</p>
            </div>
            {error !== '' && <p className='multiSelectError'>{error}</p>}
            {selected.map((item, index) => {
                return (
                    <div className='multiSelectSelected' key={index}>
                        <Image onClick={() => handleDelete(item)} style={{ filter: \`invert(\${darkMode ? '1' : '0'})\` }} alt='' src='/MultiSelect/delete.svg' width={14} height={14} />
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default MultiSelect;
`

    const cssCode = `.multiSelect {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.multiSelectRow {
    display: flex;
    gap: 12px;
    align-items: center;
}
.multiSelectRow > p {
    cursor: pointer;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}
.multiSelectRow > p:hover {
    opacity: .7;
}

.multiSelectSelected {
    display: flex;
    gap: 8px;
    align-items: center;
}
.multiSelectSelected > img {
    cursor: pointer;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}
.multiSelectSelected > img:hover {
    opacity: .7
}
.multiSelectError {
    color: #ff4d61 !important; 
}

/* darkMode */
`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

describe('MultiSelect component', () => {
    const mockSelected: string[] = [];
    const mockSetSelected = jest.fn();
    const mockQueries = ['Option 1', 'Option 2', 'Option 3'];
    const mockDarkMode = false;
    const mockPlaceholder = 'Search';

    it('renders without crashing', () => {
    render(
        <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
        />
    );
    });

    it('adds a new item to selected items', () => {
    const { getByText, getByPlaceholderText } = render(
        <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
        />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);
    
    fireEvent.change(searchInput, { target: { value: 'Option 1' } });
    fireEvent.click(addButton);

    const addedItem = getByText('Option 1');
    expect(addedItem).toBeInTheDocument();
    });

    it('displays an error for duplicate selection', () => {
    const { getByText, getByPlaceholderText } = render(
        <MultiSelect
        selected={['Option 2']}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
        />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);

    fireEvent.change(searchInput, { target: { value: 'Option 2' } });
    fireEvent.click(addButton);

    const errorElement = getByText('Duplicate');
    expect(errorElement).toBeInTheDocument();
    });

    it('displays an error for item not found', () => {
    const { getByText, getByPlaceholderText } = render(
        <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
        />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);

    fireEvent.change(searchInput, { target: { value: 'Invalid Option' } });
    fireEvent.click(addButton);

    const errorElement = getByText('Not found within list');
    expect(errorElement).toBeInTheDocument();
    });

    it('displays an error for empty input', () => {
    const { getByText } = render(
        <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
        />
    );

    const addButton = getByText('Add');

    fireEvent.click(addButton);

    const errorElement = getByText('Cannot be empty');
    expect(errorElement).toBeInTheDocument();
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 38 / 50</h4>
            <Spacer y={2} />
            <h1>MultiSelect component</h1>
            <Spacer y={4} />
            <p>The multiselect component streamlines user interaction by allowing them to effortlessly pick multiple choices from a list, enhancing versatility in data selection.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/MultiSelect' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=HLqfz7WPbsw' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <MultiSelect selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox' style={{ height:'500px' }}>
                        <MultiSelect selected={selected2} setSelected={setSelected2} queries={languages} darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
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

export default MultiSelectDemo;
