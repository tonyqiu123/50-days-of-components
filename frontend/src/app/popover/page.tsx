'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Popover from '@/components/Popover/Popover';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const PopoverDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const [output, setOutput] = useState<string>('')

    const reactCode = `import Popover from '@/components/Popover/Popover';
  
<Popover >
    {/* First child is the trigger  */}
    <Button text='Toggle popover' variant='primary' />
    {/* Second child is the popover content */}
    <div className='column'>
        <h4>This is the content of the popover.</h4>
        <Image style={{ marginTop: '16px' }} src='/Popover/losangeles.webp' alt='los angeles' width={400} height={200} />
    </div>
</Popover>`;


    const tsxCode = `import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Popover.css'
import OutsideClick from '@/components/OutsideClick/OutsideClick';

type PopoverProps = {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactElement[];
    position?: 'up-left' | 'down-left' | 'up-right' | 'down-right' | 'up-center' | 'down-center'
} & HTMLAttributes<HTMLElement>;

const Popover: React.FC<PopoverProps> = ({ isOpen: isOpenProp, setIsOpen: setIsOpenProp, children, position = 'down-center', ...props }) => {
    const [isOpenState, setIsOpenState] = useState(false);

    const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;
    const setIsOpen = setIsOpenProp !== undefined ? setIsOpenProp : setIsOpenState;

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(isOpen => !isOpen),
    });

    const content = children[1]
        ? React.cloneElement(children[1], {
            className: \`popoverContent \${position} \${isOpen ? 'showPopoverContent' : ''} \${children[1].props.className}\`
        })
        : null;

    return (
        <OutsideClick onClickOutside={() => setIsOpen(false)}>
            <div {...props} className={\`\${props.className ? props.className : ''} popover\`}>
                {trigger}
                {content}
            </div>
        </OutsideClick>
    );
};

export default Popover;
`

    const cssCode = `.popover {
    position: relative;
}

.popoverContent {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    perspective: 1000px;
    transform: scale(0.95);
    z-index: 1001;
    transition: all 250ms cubic-bezier(0.32, 0.72, 0, 1);
}


.showPopoverContent {
    pointer-events: unset;
    opacity: 1;
}

.up-right.popoverContent {
    bottom: 100%;
    left: 0;
}

.up-left.popoverContent {
    bottom: 100%;
    right: 0;
}

.up-center.popoverContent {
    bottom: 100%;
    left: 50%;
    transform: translate(-50%) scale(0.95);
}

.down-right.popoverContent {
    top: 100%;
    left: 0;
}

.down-left.popoverContent {
    top: 100%;
    right: 0;
}

.down-center.popoverContent {
    top: 100%;
    left: 50%;
    transform: translate(-50%) scale(0.95);
}

.up-center.popoverContent.showPopoverContent {
    bottom: 100%;
    transform: translate(-50%) scale(1);
}

.down-center.popoverContent.showPopoverContent {
    bottom: 100%;
    transform: translate(-50%) scale(1);
}

.popoverContent.showPopoverContent {
    transform: scale(1);
}`

    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from '@/components/Popover/Popover';

describe('Popover Component', () => {
    it('renders trigger and content when isOpen is true', () => {
    const { getByText } = render(
        <Popover isOpen={true} setIsOpen={() => {}}>
        <button>Open Popover</button>
        <div>Popover Content</div>
        </Popover>
    );

    const triggerButton = getByText('Open Popover');
    const content = getByText('Popover Content');

    expect(triggerButton).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    });

    it('toggles isOpen when trigger is clicked', () => {
    const { getByText } = render(
        <Popover isOpen={false} setIsOpen={() => {}}>
        <button>Open Popover</button>
        <div>Popover Content</div>
        </Popover>
    );

    const triggerButton = getByText('Open Popover');
    fireEvent.click(triggerButton);

    const content = getByText('Popover Content');
    expect(content).toBeInTheDocument();
    });

    it('closes popover when outside click occurs', () => {
    const { getByText, queryByText, container } = render(
        <div>
        <button>Outside</button>
        <Popover isOpen={false} setIsOpen={() => {}}>
            <button>Open Popover</button>
            <div>Popover Content</div>
        </Popover>
        </div>
    );

    const triggerButton = getByText('Open Popover');
    fireEvent.click(triggerButton);

    const outsideButton = getByText('Outside');
    fireEvent.click(outsideButton);

    const content = queryByText('Popover Content');
    expect(content).not.toHaveClass('showPopoverContent');
    });

    // Add more test cases as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 16 / 50</h4>
            <Spacer y={2} />
            <h1>Popover component</h1>
            <Spacer y={4} />
            <p>This has got to be the 10th modal I've built. Besides that, what makes popovers unique is that you can attach a modal to a component. You will find this particularily useful when building shopping carts in ecommerce sites, adding language selection, or when developing user settings preferences.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Popover' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=M7FKxklNTOU' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox' style={{ height: '700px' }}>
                        <Popover >
                            {/* First child is the trigger  */}
                            <Button text='Toggle popover' variant='primary' />
                            {/* Second child is the popover content */}
                            <Image src='/Popover/losangeles.webp' alt='los angeles' width={400} height={200} />
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

export default PopoverDemo;
