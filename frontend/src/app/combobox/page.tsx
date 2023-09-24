'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Button from '@/components/Button/Button';
import Popover from '@/components/Popover/Popover';

const ComboboxDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();
  const [isOpen, setIsOpen] = useState(false)

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


  return (
    <React.Fragment>

      <h4>Day 32 / 50</h4>
      <Spacer y={2} />
      <h1>Combobox component</h1>
      <Spacer y={4} />
      <p>The ComboBox component is a user interface element that combines an input field with a dropdown list, allowing users to either type in a value or select from a predefined list of options.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Combobox' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=vlroK2Umfew' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
          <div className='demoBox' style={{ minHeight: '700px' }}>
            <Popover isOpen={isOpen} setIsOpen={setIsOpen}>
              <Button text='Toggle command' variant='primary' />
              <div>
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
            </Popover>
          </div>
        </TabsContent>
        <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

      </Tabs>

    </React.Fragment>
  );
};

export default ComboboxDemo;
