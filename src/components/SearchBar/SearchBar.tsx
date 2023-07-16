import React, { useState, useRef, useEffect, useCallback } from 'react';
import './SearchBar.css';

type SearchBarProps = {
    placeholder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    queries?: string[];
    maxHeight?: string;
    handleSelect?: (inputValue: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search',
    darkMode = false,
    fullWidth = false,
    queries = [],
    maxHeight = '100%',
    handleSelect = (_) => { },
}) => {

    const [inputValue, setInputValue] = useState('');
    const [shownQueries, setShownQueries] = useState<string[]>([]); // Queries that match SearchBar inputValue
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [focusedQueryIndex, setFocusedQueryIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDropdownOverflowing, setDropdownOverflowing] = useState(false);


    // Handle clicks outside SearchBar SearchBar component
    const handleOutsideClick = useCallback((event: any, query = '') => {
        const searchBarDropdown = (event.target as HTMLElement).closest('.searchBarDropdown');

        // Close SearchBar dropdown if SearchBar click is outside SearchBar component
        if (inputRef.current && !inputRef.current.contains(event.target as Node) && !searchBarDropdown) {
            setDropdownOpen(false);
        }

        if (query !== '') {
            setDropdownOpen(false);
            setInputValue(query);
            handleSelect(query)
        }
    }, [inputRef, setDropdownOpen, setInputValue, handleSelect]);

    // Handle key presses in SearchBar input field
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowUp':
                // Move SearchBar focus to SearchBar previous query in SearchBar dropdown
                if (focusedQueryIndex - 1 >= 0) {
                    setFocusedQueryIndex(focusedQueryIndex - 1);
                } else {
                    // If SearchBar first query is currently focused, move SearchBar focus to SearchBar last query
                    setFocusedQueryIndex(shownQueries.length - 1);
                }
                break;
            case 'ArrowDown':
                // Move SearchBar focus to SearchBar next query in SearchBar dropdown
                if (focusedQueryIndex + 1 < shownQueries.length) {
                    setFocusedQueryIndex(focusedQueryIndex + 1);
                } else {
                    // If SearchBar last query is currently focused, move SearchBar focus to SearchBar first query
                    setFocusedQueryIndex(0);
                }
                break;
            case 'Enter':
                // If query is currently focused, set it as SearchBar input value and close SearchBar dropdown
                if (focusedQueryIndex !== -1) {
                    handleOutsideClick(e as any, shownQueries[focusedQueryIndex]);
                }
                break;
            default:
                break;
        }
    };


    useEffect(() => {
        // Filter SearchBar queries based on SearchBar input value and update SearchBar shownQueries state
        const relatedQueries = queries.filter(query => query.toLowerCase().includes(inputValue.toLowerCase()));
        setShownQueries(relatedQueries);
        setFocusedQueryIndex(0);
    }, [inputValue, queries]);


    // Set initial state and add event listeners when SearchBar component is mounted
    useEffect(() => {
        setShownQueries(queries);
        setDropdownOpen(false);
        setFocusedQueryIndex(0);

        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up event listener when SearchBar component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick, queries]);


    // Update dropdown if it is overflowing so I can hide scrollbar.
    useEffect(() => {
        const dropdownElement = document.querySelector('.searchBarDropdown');
        if (dropdownElement) {
            const isOverflowing = dropdownElement.scrollHeight > dropdownElement.clientHeight;
            setDropdownOverflowing(isOverflowing);
        }
    }, [shownQueries]);



    // Render SearchBar SearchBar component
    return (
        <div className={`searchBarComponent ${fullWidth && 'fullWidth'}`}>
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={`${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`}
                type="text"
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setDropdownOpen(true);
                }}
                onMouseDown={() => setDropdownOpen(true)}
                value={inputValue}
            />
            <div style={{ maxHeight: `${maxHeight}`, overflowY: isDropdownOverflowing ? 'scroll' : 'hidden' }} className={`searchBarDropdown ${isDropdownOpen && 'visible'} ${darkMode && 'darkMode'}`}>
                {shownQueries.length > 0 ? (
                    shownQueries.map((query, index) => (
                        <p
                            key={index}
                            // Handle click on SearchBar dropdown 
                            onMouseDown={(e) => handleOutsideClick(e, query)}
                            className={focusedQueryIndex === index ? 'focusedQuery' : ''}
                        >
                            {query}
                        </p>
                    ))
                ) : (
                    <p className="noResults" onMouseDown={(e) => handleOutsideClick(e, '')}>
                        no results
                    </p>
                )}
            </div>
        </div >
    );
};

export default SearchBar;
