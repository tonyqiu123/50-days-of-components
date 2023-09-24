'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';

const CommandDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal(); 

  const reactCode = `import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';';

<Command darkMode={isDarkMode}> 
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem text='Calendar' imageSrc='/Command/calendar.svg' />
      <CommandItem text='Search Emojis' imageSrc='/Command/emoji.svg' />
      <CommandItem text='Calculator' imageSrc='/Command/calculator.svg' />
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem text='Profile' imageSrc='/Command/profile.svg' />
      <CommandItem text='Billing' imageSrc='/Command/card.svg' />
      <CommandItem text='Settings' imageSrc='/Command/settings.svg' />
    </CommandGroup>
  </CommandList>
</Command>`

const tsxCode = `import React, { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction, useEffect, HTMLAttributes } from 'react';
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
            <div {...props} className={\`command \${props.className ? props.className : ''}  \${darkMode && 'darkMode'}\`}>
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

    return <Input {...props} search={search} setSearch={setSearch} darkMode={darkMode} iconSrc='/Command/search.svg' placeHolder={placeholder} className={\`commandInput \${props.className ? props.className : ''} \${darkMode && 'darkMode'}\`} />
}

// CommandList
type CommandListProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>

const CommandList: React.FC<CommandListProps> = ({ children, ...props }) => {
    const { darkMode } = useCommand();
    return <div {...props} className={\`commandList \${props.className ? props.className : ''} \${darkMode && 'darkMode'}\`}>{children}</div>;
}


// CommandGroup
type CommandGroupProps = {
    heading: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

const CommandGroup: React.FC<CommandGroupProps> = ({ heading, children, ...props }) => {

    const { darkMode } = useCommand();
    return (
        <div {...props} className={\`commandGroup \${props.className ? props.className : ''} \${darkMode && 'darkMode'}\`}>
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
            <div {...props} onClick={() => handleSelect(text)} className={\`commandItem \${props.className ? props.className : ''} \${darkMode && 'darkMode'}\`}>
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
            <div {...props} className={\`commandSeparator \${props.className ? props.className : ''} \${darkMode && 'darkMode'}\`} ></div>
    )
}

export { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator };`

  const cssCode = `.command {
    background-color: white;
    border: 1px solid #E2E2E2;
    overflow-y: hidden;
}

.commandInput {
    padding: 12px;
    border: none;
    border-bottom: 1px solid #E2E2E2;
}

.commandInput:focus {
    outline: none;
}

.commandList {
    padding: 4px;
    display: flex;
    flex-direction: column;
}
.commandGroup {
    height: 100%;
}

.commandGroup>h3 {
    font-size: 12px;
    color: #A0A0A0;
    font-weight: 500;
    padding: 6px;
}

.commandItem {
    padding: 6px;
    display: flex;
    gap: 8px;
    font-size: 14px;
    cursor: default;
}

.commandItem:hover {
    background-color: #f3f3f3;
}

.commandSeparator {
    height: 1px;
    background-color: #f3f3f3;
    margin: 4px -4px;
}

/* darkMode */
.darkMode.command {
    border: 1px solid #313131;
    background-color: #000000;
}

.darkMode.commandInput {
    border: none;
    border-bottom: 1px solid rgb(54, 54, 54);
}

.darkMode.commandGroup>h3 {
    color: #717171;
}
.darkMode.commandItem>img {
    filter: invert(1);
}
.darkMode.commandItem:hover {
    background-color: #313131;
}

.darkMode.commandSeparator {
    background-color: #313131;
}`

  const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  useCommand,
} from '@/components/Command/Command';

describe('Command Module', () => {
  describe('Command Component', () => {
    it('renders with children', () => {
      const { getByText } = render(
        <Command>
          <p>Command Content</p>
        </Command>
      );
      const commandContent = getByText('Command Content');

      expect(commandContent).toBeInTheDocument();
    });

    // Add more tests as needed
  });

  describe('CommandInput Component', () => {
    it('renders with placeholder', () => {
      const { getByPlaceholderText } = render(
        <Command>
          <CommandInput placeholder="Search..." />
        </Command>
      );
      const inputElement = getByPlaceholderText('Search...');

      expect(inputElement).toBeInTheDocument();
    });

    // Add more tests as needed
  });

  // Similar tests for CommandList, CommandGroup, CommandItem, CommandSeparator components

  describe('useCommand Hook', () => {
    it('returns context values', () => {
      const TestComponent = () => {
        const context = useCommand();
        return <p>{context.darkMode ? 'Dark Mode' : 'Light Mode'}</p>;
      };

      const { getByText } = render(
        <Command>
          <TestComponent />
        </Command>
      );

      const contextValue = getByText('Light Mode');
      expect(contextValue).toBeInTheDocument();
    });

    // Add more tests as needed
  });
});`

  return (
    <React.Fragment>

      <h4>Day 25 / 50</h4>
      <Spacer y={2} />
      <h1>Command component</h1>
      <Spacer y={4} />
      <p>The command web dev component is a searchable modal interface, optimized for user accessibility and functionality, allowing categorized queries to be input through keyboard commands. This unique blend of features enhances user experience by making information readily available and easily navigable, all through a simple keypress.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Command' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=0yIhtC0RUVY' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
            <Command darkMode={isDarkMode}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandGroup heading="Suggestions">
                  <CommandItem text='Calendar' imageSrc='/Command/calendar.svg' />
                  <CommandItem text='Search Emojis' imageSrc='/Command/emoji.svg' />
                  <CommandItem text='Calculator' imageSrc='/Command/calculator.svg' />
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem text='Profile' imageSrc='/Command/profile.svg' />
                  <CommandItem text='Billing' imageSrc='/Command/card.svg' />
                  <CommandItem text='Settings' imageSrc='/Command/settings.svg' />
                </CommandGroup>
              </CommandList>
            </Command>
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

export default CommandDemo;
