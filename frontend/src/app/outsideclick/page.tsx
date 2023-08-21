'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import Popover from '@/components/Popover/Popover';
import Button from '@/components/Button/Button';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';

const CarouselDemo: React.FC = () => {

  const { isDarkMode, setIsDarkMode } = useGlobal();

  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    <React.Fragment >

      <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
      <h1>OutsideClick component</h1>
      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview1'>
          <div className='demoBox'>
            <Popover isOpen={isOpen} setIsOpen={setIsOpen}>
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
            </Popover>
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <ShowMore text='Reveal'  darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>

      </Tabs>

    </React.Fragment>
  );
};

export default CarouselDemo; 