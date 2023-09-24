'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import SearchBar from '@/components/SearchBar/SearchBar';

const SearchBarDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [search, setSearch] = useState<string>('')

  const foodProducts = [
    "Chocolate Chip Cookies",
    "Strawberry Jam",
    "Chicken Noodle Soup",
    "Vanilla Ice Cream",
    "Blueberry Pancakes",
    "Caesar Salad Dressing",
    "BBQ Sauce",
    "Spaghetti Bolognese",
    "Sourdough Bread",
    "Guacamole",
    "Apple Pie",
    "Beef Stew",
    "Peanut Butter",
    "Orange Juice",
    "Tomato Soup",
    "Greek Yogurt",
    "Cinnamon Rolls",
    "Macaroni and Cheese",
    "Honey Mustard",
    "Pineapple Pizza",
    "Chocolate Milkshake",
    "Fish and Chips",
    "French Onion Soup",
    "Buffalo Wings",
    "Mango Salsa",
    "Garlic Bread",
    "Chicken Alfredo",
    "Raspberry Cheesecake",
    "Caesar Salad",
    "Maple Syrup",
    "Oatmeal Raisin Cookies",
    "Tacos",
    "Mashed Potatoes",
    "Lemonade",
    "Clam Chowder",
    "Chicken Caesar Wrap",
    "Caramel Popcorn",
    "Beef Burrito",
    "Shrimp Scampi",
    "Cheeseburger",
    "Strawberry Shortcake",
    "Nachos",
    "Pumpkin Pie",
    "Chocolate Brownies",
    "Teriyaki Chicken",
    "Caesar Pasta Salad",
    "Sweet and Sour Pork",
    "Lobster Bisque",
    "Blueberry Muffins",
    "Chicken Quesadilla"
  ];


  const reactCode = `import SearchBar from '@/components/SearchBar/SearchBar';

const [isFullWidth, setIsFullWidth] = useState(false)
const [search, setSearch] = useState<string>('')

const foodProducts = [
  "Chocolate Chip Cookies",
  "Strawberry Jam",
  "Chicken Noodle Soup",
  "Vanilla Ice Cream",
  "Blueberry Pancakes",
  "Caesar Salad Dressing",
  "BBQ Sauce",
  "Spaghetti Bolognese",
  "Sourdough Bread",
  "Guacamole",
  "Apple Pie",
  "Beef Stew",
  "Peanut Butter",
  "Orange Juice",
  "Tomato Soup",
  "Greek Yogurt",
  "Cinnamon Rolls",
  "Macaroni and Cheese",
  "Honey Mustard",
  "Pineapple Pizza",
  "Chocolate Milkshake",
  "Fish and Chips",
  "French Onion Soup",
  "Buffalo Wings",
  "Mango Salsa",
  "Garlic Bread",
  "Chicken Alfredo",
  "Raspberry Cheesecake",
  "Caesar Salad",
  "Maple Syrup",
  "Oatmeal Raisin Cookies",
  "Tacos",
  "Mashed Potatoes",
  "Lemonade",
  "Clam Chowder",
  "Chicken Caesar Wrap",
  "Caramel Popcorn",
  "Beef Burrito",
  "Shrimp Scampi",
  "Cheeseburger",
  "Strawberry Shortcake",
  "Nachos",
  "Pumpkin Pie",
  "Chocolate Brownies",
  "Teriyaki Chicken",
  "Caesar Pasta Salad",
  "Sweet and Sour Pork",
  "Lobster Bisque",
  "Blueberry Muffins",
  "Chicken Quesadilla"
];
  
<SearchBar
  search={search}
  setSearch={setSearch}
  placeholder='Search foods'
  fullWidth={isFullWidth}
  darkMode={isDarkMode}
  queries={foodProducts}
  maxHeight='500px'
/>`;

  const tsxCode = `import React, { useState, useRef, useEffect, useCallback, HTMLAttributes } from 'react';
import './SearchBar.css';

type SearchBarProps = {
    placeholder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    queries: string[];
    maxHeight?: string;
    title?: string;
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
} & HTMLAttributes<HTMLElement>;

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search',
    darkMode = false,
    fullWidth = false,
    queries,
    maxHeight = '200px',
    search,
    setSearch,
    title,
    ...props
}) => {

    const [shownQueries, setShownQueries] = useState<string[]>([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [focusedQueryIndex, setFocusedQueryIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDropdownOverflowing, setDropdownOverflowing] = useState(false);

    const handleClick = useCallback((event: any, query = '') => {
        const searchBarDropdown = (event.target as HTMLElement).closest('.searchBarDropdown');
        if (inputRef.current && !inputRef.current.contains(event.target as Node) && !searchBarDropdown) {
            setDropdownOpen(false);
        }
        if (query !== '') {
            setDropdownOpen(false);
            setSearch(query);
        }
    }, [inputRef, setDropdownOpen, setSearch]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowUp':
                if (focusedQueryIndex - 1 >= 0) {
                    setFocusedQueryIndex(focusedQueryIndex - 1);
                } else {
                    setFocusedQueryIndex(shownQueries.length - 1);
                }
                break;
            case 'ArrowDown':
                if (focusedQueryIndex + 1 < shownQueries.length) {
                    setFocusedQueryIndex(focusedQueryIndex + 1);
                } else {
                    setFocusedQueryIndex(0);
                }
                break;
            case 'Enter':
                if (focusedQueryIndex !== -1) {
                    handleClick(e as any, shownQueries[focusedQueryIndex]);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const relatedQueries = queries.filter(query => query.toLowerCase().includes(search.toLowerCase()));
        setShownQueries(relatedQueries);
        setFocusedQueryIndex(0);
    }, [search, queries]);

    useEffect(() => {
        setShownQueries(queries);
        setDropdownOpen(false);
        setFocusedQueryIndex(0);
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick, queries]);

    useEffect(() => {
        const dropdownElement = document.querySelector('.searchBarDropdown');
        if (dropdownElement) {
            const isOverflowing = dropdownElement.scrollHeight > dropdownElement.clientHeight;
            setDropdownOverflowing(isOverflowing);
        }
    }, [shownQueries]);

    return (
        <div {...props} className={\`\${props.className ? props.className : ''} searchBarComponent \${fullWidth && 'fullWidth'}  \`}>
            {title && <p>{title}</p>}
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={\` \${darkMode && 'darkMode'} \${fullWidth && 'fullWidth'}\`}
                type="text"
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setDropdownOpen(true);
                }}
                onMouseDown={() => setDropdownOpen(true)}
                value={search}
            />
            <div style={{ maxHeight: \`\${maxHeight}\`, overflowY: isDropdownOverflowing ? 'scroll' : 'hidden' }} className={\`searchBarDropdown \${isDropdownOpen && 'visible'} \${darkMode && 'darkMode'}\`}>
                {shownQueries.length > 0 ? (
                    shownQueries.map((query, index) => (
                        <p
                            key={index}
                            onMouseDown={(e) => handleClick(e, query)}
                            className={focusedQueryIndex === index ? 'focusedQuery' : ''}
                        >
                            {query}
                        </p>
                    ))
                ) : (
                    <p className="noResults" onMouseDown={(e) => handleClick(e, '')}>
                        no results
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
`

  const cssCode = `.searchBarComponent {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input[type="text"] {
    font-size: 14px;
    border: 1px solid #E2E2E2;
    padding: 8px 12px;
    min-width: 320px;
}

input[type="text"]:focus {
    outline: 1px solid #E2E2E2;
}

input[type="text"].darkMode {
    color: white;
    border: 1px solid #3a3a3a;
    background-color: rgb(15, 15, 15);
}

.fullWidth {
    width: 100%;
}

input[type="text"].darkMode:focus {
    color: white;
    outline: 1px solid #3a3a3a;
}

input[type="text"].darkMode::placeholder {
    color: #A0A0A0;
}

.searchBarDropdown {
    z-index: 2;
    width: 100%;
    gap: 4px;
    pointer-events: none;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    position: absolute;
    border: 1px solid #E2E2E2;
    display: flex;
    flex-direction: column;
    padding: 8px;
    opacity: 0;
    background-color: white;
    perspective: 1000px;
    transform: translate(0, 25px) scale(0.95);
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}


.searchBarDropdown.visible {
    pointer-events: unset;
    opacity: 1;
    transform: scale(1);
}

.searchBarDropdown>p {
    padding: 8px;
    cursor: pointer;
}

.searchBarDropdown>p:hover,
.focusedQuery {
    background-color: #f8f8f8;
}

.noResults {
    cursor: default !important;
    background-color: rgba(255, 255, 255, 0) !important;
}

/* Scrollbar */

.searchBarDropdown::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.searchBarDropdown::-webkit-scrollbar-track {
    background-color: #f8f8f8;
}

.searchBarDropdown::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
}

/* Darkmode */
.searchBarDropdown.darkMode {
    background-color: rgb(0, 0, 0);
    border: 1px solid #3a3a3a;
}

.searchBarDropdown.darkMode>p:hover,
.darkMode>.focusedQuery {
    background-color: #313131;
}

.searchBarDropdown.darkMode::-webkit-scrollbar-track {
    background-color: #3a3a3a;
}

.searchBarDropdown.darkMode::-webkit-scrollbar-thumb {
    background-color: rgb(126, 126, 126);
}`

  const unitTestCode = `import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar search="" setSearch={() => { }} queries={[]} />);
  });

  it('displays the provided search value', () => {
    const searchValue = 'Test Search';
    render(<SearchBar search={searchValue} setSearch={() => { }} queries={[]} />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toHaveValue(searchValue);
  });

  it('updates search value when typing', () => {
    const setSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar search="" setSearch={setSearch} queries={[]} />);
    const inputElement = getByPlaceholderText('Search');
    const newSearchValue = 'New Search Value';

    fireEvent.change(inputElement, { target: { value: newSearchValue } });

    expect(setSearch).toHaveBeenCalledWith(newSearchValue);
  });

  it('opens dropdown when clicking on input', () => {
    const { container } = render(<SearchBar search="" setSearch={() => { }} queries={[]} />);
    const inputElement = screen.getByPlaceholderText('Search');

    fireEvent.mouseDown(inputElement);

    const dropdownElement = container.querySelector('.searchBarDropdown');
    expect(dropdownElement).toHaveClass('visible');
  });


  it('calls setSearch when clicking on a query', () => {
    const setSearch = jest.fn();
    const queries = ['apple', 'banana', 'cherry'];
    const { getByText } = render(<SearchBar search="" setSearch={setSearch} queries={queries} />);

    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'a' } });

    const appleElement = getByText('apple');
    fireEvent.mouseDown(appleElement);

    expect(setSearch).toHaveBeenCalledWith('apple');
  });

  // Add more test cases as needed

});
`

  return (
    <React.Fragment>

      <h1>SearchBar component</h1>
      <Spacer y={4} />
      <p>A SearchBar component that can be easily integrated into any React project. It provides a convenient and interactive way for users to search through an array of items for quick access and retrieval. Let's dive into its features, installation, usage, props, and code.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/SearchBar' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=eiwNHE6AiKk' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
          <div className='demoBox' style={{ height: '700px' }}>
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder='Search foods'
              fullWidth={isFullWidth}
              darkMode={isDarkMode}
              queries={foodProducts}
              maxHeight='300px'
            />
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

export default SearchBarDemo;
