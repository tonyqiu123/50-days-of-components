'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Popover from '@/components/Popover/Popover';
import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator } from '@/components/Command/Command';


const OutsideClickDemo: React.FC = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const reactCode = `<Popover>
<Button text='Toggle command' variant='primary' />
  <div>
    <Command darkMode={isDarkMode}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem text='Calendar' imageSrc='/command/Calendar.svg' />
          <CommandItem text='Search Emojis' imageSrc='/command/Emoji.svg' />
          <CommandItem text='Calculator' imageSrc='/command/Calculator.svg' />
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem text='Profile' imageSrc='/command/profile.svg' />
          <CommandItem text='Billing' imageSrc='/command/card.svg' />
          <CommandItem text='Settings' imageSrc='/command/settings.svg' />
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
</Popover>`;




  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>
      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Tooltip darkMode={isDarkMode} toolTipText="Element that combines an input field with a dropdown list.">
        <p>Combobox component</p>
      </Tooltip>

      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>
        <TabsContent value='preview'>
          <div className='demoBox'>
            <Popover isOpen={isOpen} setIsOpen={setIsOpen}>
              <Button text='Toggle Combobox' variant='primary' />
              <div>
                <Command darkMode={isDarkMode}>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandGroup heading="Suggestions">
                      <CommandItem text='Calendar' imageSrc='/command/Calendar.svg' />
                      <CommandItem text='Search Emojis' imageSrc='/command/Emoji.svg' />
                      <CommandItem text='Calculator' imageSrc='/command/Calculator.svg' />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem text='Profile' imageSrc='/command/profile.svg' />
                      <CommandItem text='Billing' imageSrc='/command/card.svg' />
                      <CommandItem text='Settings' imageSrc='/command/settings.svg' />
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </Popover>
          </div>
        </TabsContent>
        <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>
      </Tabs>
    </div>
  );
};

export default OutsideClickDemo;
