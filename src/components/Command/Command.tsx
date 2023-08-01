import React, { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import Input from '@/components/Input/Input';
import './Command.css'
import Image from 'next/image';

interface CommandContextType {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    darkMode: boolean;
    handleSelect: ((inputValue: string) => void);
}

const CommandContext = createContext<CommandContextType>({ search: '', setSearch: () => { }, darkMode: false, handleSelect: () => { } });

export const useCommand = () => useContext(CommandContext);

// Command
interface CommandProps {
    classname?: string;
    children: ReactNode;
    darkMode?: boolean;
    handleSelect?: ((inputValue: string) => void);
}

const Command: React.FC<CommandProps> = ({ classname = '', children, darkMode = false, handleSelect = () => { } }) => {

    const [search, setSearch] = useState('');

    return (
        <CommandContext.Provider value={{ search, setSearch, darkMode, handleSelect }} >
            <div className={`command ${classname} ${darkMode && 'darkMode'}`}>
                {children}
            </div>
        </CommandContext.Provider>
    )
};

// CommandInput
interface CommandInputProps {
    classname?: string;
    placeholder: string;
}

const CommandInput: React.FC<CommandInputProps> = ({ classname, placeholder }) => {

    const { darkMode, search, setSearch } = useCommand();

    return <Input search={search} setSearch={setSearch} darkMode={darkMode} iconSrc='/Command/search.svg' placeHolder={placeholder} className={`commandInput ${classname} ${darkMode && 'darkMode'}`} />
}

// CommandList
interface CommandListProps {
    classname?: string;
    children: ReactNode;
}

const CommandList: React.FC<CommandListProps> = ({ classname, children }) => {
    const { darkMode } = useCommand();
    return <div className={`commandList ${classname} ${darkMode && 'darkMode'}`}>{children}</div>;
}


// CommandGroup
type CommandGroupProps = {
    classname?: string;
    heading: string;
    children: React.ReactNode;
};

const CommandGroup: React.FC<CommandGroupProps> = ({ classname, heading, children }) => {

    const { darkMode } = useCommand();
    return (
        <div className={`commandGroup ${classname} ${darkMode && 'darkMode'}`}>
            <h3>{heading}</h3>
            {children}
        </div>
    );
}


// CommandItem
interface CommandItemProps {
    classname?: string;
    text: string;
    imageSrc?: string;
}

const CommandItem: React.FC<CommandItemProps> = ({ classname, text, imageSrc = '' }) => {


    const { search, handleSelect, darkMode } = useCommand();

    return (
        text.toLowerCase().includes(search) ?
            <div onClick={() => handleSelect(text)} className={`commandItem ${classname} ${darkMode && 'darkMode'}`}>
                <Image alt='' src={imageSrc} height={16} width={16} />
                <p>{text}</p>
            </div>
            : null
    )
}

// CommandSeparator
interface CommandSeparatorProps {
    classname?: string;
}

const CommandSeparator: React.FC<CommandSeparatorProps> = ({ classname }) => {

    const { search, darkMode } = useCommand();
    return (
        search ? null :
            <div className={`commandSeparator ${classname} ${darkMode && 'darkMode'}`} ></div>
    )
}

export { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator };
