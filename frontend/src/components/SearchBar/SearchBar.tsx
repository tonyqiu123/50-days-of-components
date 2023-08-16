import React, { useState, useRef, useEffect, useCallback, HTMLAttributes } from 'react';
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
        <div {...props} className={`${props.className ? props.className : ''} searchBarComponent ${fullWidth && 'fullWidth'}  `}>
            {title && <p>{title}</p>}
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={` ${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`}
                type="text"
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setDropdownOpen(true);
                }}
                onMouseDown={() => setDropdownOpen(true)}
                value={search}
            />
            <div style={{ maxHeight: `${maxHeight}`, overflowY: isDropdownOverflowing ? 'scroll' : 'hidden' }} className={`searchBarDropdown ${isDropdownOpen && 'visible'} ${darkMode && 'darkMode'}`}>
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
