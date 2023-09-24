'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Button from '@/components/Button/Button';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';
import Popover from '@/components/Popover/Popover';

const OutsideClickDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const reactCode = `import OutsideClick from '@/components/OutsideClick/OutsideClick';

<OutsideClick darkMode={isDarkMode} primaryText='Accept terms and conditions' />`

  const tsxCode = `import React, { useEffect, useRef, ReactElement, FC, HTMLAttributes } from 'react';

type Props = {
    children: ReactElement;
    onClickOutside: () => void;
} & HTMLAttributes<HTMLElement>

const OutsideClick: FC<Props> = ({ children, onClickOutside, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <div {...props} className={\`outsideClick \${props.className ? props.className : ''}\`} ref={wrapperRef}>
            {children}
        </div>
    )
};

export default OutsideClick;
`


  const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OutsideClick from '@/components/OutsideClick/OutsideClick';

describe('OutsideClick Component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <OutsideClick onClickOutside={() => { }}>
        <p>Inside Content</p>
      </OutsideClick>
    );

    const insideContent = getByText('Inside Content');
    expect(insideContent).toBeInTheDocument();
  });

  it('does not call onClickOutside when clicking inside', () => {
    const mockOnClickOutside = jest.fn();
    const { getByText } = render(
      <OutsideClick onClickOutside={mockOnClickOutside}>
        <p>Inside Content</p>
      </OutsideClick>
    );

    const insideContent = getByText('Inside Content');
    fireEvent.mouseDown(insideContent);

    expect(mockOnClickOutside).not.toHaveBeenCalled();
  });

  // Add more tests as needed
});
`

  return (
    <React.Fragment>

      <h1>OutsideClick component</h1>
      <Spacer y={4} />
      <p>The OutsideClick component allows developers to execute a function whenever a user clicks outside a component. It is super powerful if you are building your own components, as you essentially cut down 15 lines of ugly react ref logic into 3 simple lines: import, declare a state, and add wrapper with the setState passed as a prop. That's it.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/OutsideClick' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=FwKfbIFAN38' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
          <div className='demoBox' style={{ height:'700px' }}>
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
        <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

        <TabsContent value='tsx'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
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

export default OutsideClickDemo;
