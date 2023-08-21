import React, { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction, useEffect, HTMLAttributes } from 'react';
import Input from '@/components/Input/Input';
import './Command.css'
import Image from 'next/image';

type CommandContextType = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    darkMode: boolean;
    handleSelect: ((inputValue: string) => void);
}

const CommandContext = createContext<CommandContextType>({ search: '', setSearch: () => { }, darkMode: false, handleSelect: () => { } });

export const useCommand = () => useContext(CommandContext);

// Command
type CommandProps = {
    children: ReactNode;
    darkMode?: boolean;
    handleSelect?: ((inputValue: string) => void);
} & HTMLAttributes<HTMLElement>

const Command: React.FC<CommandProps> = ({ children, darkMode = false, handleSelect = () => { }, ...props }) => {

    const [search, setSearch] = useState('');

    return (
        <CommandContext.Provider value={{ search, setSearch, darkMode, handleSelect }} >
            <div {...props} className={`command ${props.className ? props.className : ''}  ${darkMode && 'darkMode'}`}>
                {children}
            </div>
        </CommandContext.Provider>
    )
};

// CommandInput
type CommandInputProps = {
    placeholder: string;
} & HTMLAttributes<HTMLElement>

const CommandInput: React.FC<CommandInputProps> = ({ placeholder, ...props }) => {

    const { darkMode, search, setSearch } = useCommand();

    return <Input {...props} search={search} setSearch={setSearch} darkMode={darkMode} iconSrc='/Command/search.svg' placeHolder={placeholder} className={`commandInput ${props.className ? props.className : ''} ${darkMode && 'darkMode'}`} />
}

// CommandList
type CommandListProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>

const CommandList: React.FC<CommandListProps> = ({ children, ...props }) => {
    const { darkMode } = useCommand();
    return <div {...props} className={`commandList ${props.className ? props.className : ''} ${darkMode && 'darkMode'}`}>{children}</div>;
}


// CommandGroup
type CommandGroupProps = {
    heading: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

const CommandGroup: React.FC<CommandGroupProps> = ({ heading, children, ...props }) => {

    const { darkMode } = useCommand();
    return (
        <div {...props} className={`commandGroup ${props.className ? props.className : ''} ${darkMode && 'darkMode'}`}>
            <h3>{heading}</h3>
            {children}
        </div>
    );
}


// CommandItem
type CommandItemProps = {
    text: string;
    imageSrc?: string;
} & HTMLAttributes<HTMLElement>

const CommandItem: React.FC<CommandItemProps> = ({ text, imageSrc, ...props }) => {


    const { search, handleSelect, darkMode } = useCommand();

    return (
        text.toLowerCase().includes(search) ?
            <div {...props} onClick={() => handleSelect(text)} className={`commandItem ${props.className ? props.className : ''} ${darkMode && 'darkMode'}`}>
                {imageSrc ? <Image alt='' src={imageSrc} height={16} width={16} /> : null}
                <p>{text}</p>
            </div>
            : null
    )
}

// CommandSeparator
type CommandSeparatorProps = {
} & HTMLAttributes<HTMLElement>

const CommandSeparator: React.FC<CommandSeparatorProps> = ({ ...props }) => {

    const { search, darkMode } = useCommand();
    return (
        search ? null :
            <div {...props} className={`commandSeparator ${props.className ? props.className : ''} ${darkMode && 'darkMode'}`} ></div>
    )
}

export { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator };
