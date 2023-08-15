import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
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
        <div className={`multiSelect ${darkMode ? 'darkMode' : ''}`} {...props}>
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
                        <Image onClick={() => handleDelete(item)} style={{ filter: `invert(${darkMode ? '1' : '0'})` }} alt='' src='/MultiSelect/delete.svg' width={14} height={14} />
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default MultiSelect;
