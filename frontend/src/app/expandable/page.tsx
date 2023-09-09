'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import { Expandable, ExpandableProvider } from '@/components/Expandable/Expandable';

const ExpandableDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Expandable from '@/components/Expandable/Expandable';

<ExpandableProvider className='expandableDemo' darkMode={isDarkMode}>
    <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Attach Files'>
        <Expandable iconSrc='/Expandable/paperclip.svg' text='Document 1'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 1'></Expandable>
            <Expandable text='Subdocument 2'></Expandable>
        </Expandable>
        <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Document 2'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 3'></Expandable>
            <Expandable text='Subdocument 4'></Expandable>
        </Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/mail.svg' text='Send Email'>
        <Expandable text='Compose New Email'></Expandable>
        <Expandable text='Check Inbox'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/calendar.svg' text='Schedule Event'>
        <Expandable text='Create New Event'></Expandable>
        <Expandable text='View Upcoming Events'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/settings.svg' text='Settings'>
        <Expandable text='General Settings'></Expandable>
        <Expandable text='Privacy and Security'></Expandable>
        <Expandable text='Notifications'></Expandable>
    </Expandable>
</ExpandableProvider>`;

    const tsxCode = `import React, { HTMLAttributes, ReactNode } from "react";
import './Expandable.css'
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

type ExpandableProps = {
    children: ReactNode;
    darkMode?: boolean;
    showExpandable: boolean
    setShowExpandable: React.Dispatch<React.SetStateAction<boolean>>; 
} & HTMLAttributes<HTMLElement>

const Expandable: React.FC<ExpandableProps> = ({ children, darkMode = false, showExpandable = false, setShowExpandable, ...props}) => {

    return (
    <div {...props} className={\`drawer \${darkMode && "darkMode"} \${props.className ? props.className : ''}\`}>
        <Backdrop darkMode={darkMode} showBackdrop={showExpandable} setShowBackdrop={setShowExpandable} />
        <Swipeable className='drawerContent' closeDirection="down" visible={showExpandable} setVisible={setShowExpandable}>
        {children}
        </Swipeable>
    </div>
    );
};

export default Expandable`

    const cssCode = `.expandableProvider {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: white;
}

.expandable {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.expandable:hover {
    background-color: #f5f5f5;
}

.expandableLeft {
    display: flex;
    align-items: center;
    gap: 8px;
}

.expandableIcon {
    width: 20px;
}

.expandableChildContainer {
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    border-left: 1px solid #d4d4d4;
}

.expandableArrow {
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.expanded.expandableArrow {
    transform: rotate(180deg);
}

/* darkmode */
.darkMode.expandableProvider {
    background-color: rgb(15, 15, 15);
}

.darkMode.expandable img {
    filter: invert(1);
}

.darkMode.expandable:hover {
    background-color: #1f1f1f;
}

.darkMode.expandableProvider .expandableChildContainer {
    border-left: 1px solid #717171;
} `


    const unitTestCode = `import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Expandable from '@/components/Expandable/Expandable';

describe('Expandable Component', () => {
    it('renders children as draggable items', () => {
    const { getByText } = render(
        <Expandable>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        </Expandable>
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    const item3 = getByText('Item 3');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    });

    it('reorders items on drag and drop', () => {
    const { getByText } = render(
        <Expandable>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        </Expandable>
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    const item3 = getByText('Item 3');

    // Simulate drag and drop
    // You can use @testing-library/user-event for more realistic interaction simulation
    item3.style.transform = 'translate(0px, 72px)';
    item3.style.transition = 'none';

    fireEvent.dragEnd(item3, { clientX: 0, clientY: 72 });

    const reorderedItem1 = getByText('Item 2');
    const reorderedItem2 = getByText('Item 3');
    const reorderedItem3 = getByText('Item 1');

    expect(reorderedItem1).toBeInTheDocument();
    expect(reorderedItem2).toBeInTheDocument();
    expect(reorderedItem3).toBeInTheDocument();
    });

    // Add more test cases as needed
});`

    return (
        <React.Fragment>

            <h4>Day 31 / 50</h4>
            <Spacer y={2} />
            <h1>Expandable component</h1>
            <Spacer y={4} />
            <p>The Expandable component empowers interactive user interfaces by creating expandable elements with customizable text and optional icons. It offers a seamless integration of content expansion and collapse, enhancing user experience and engagement.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Expandable' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=yiolgCDMEbw' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <ExpandableProvider className='expandableDemo' darkMode={isDarkMode}>
                            <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Attach Files'>
                                <Expandable iconSrc='/Expandable/paperclip.svg' text='Document 1'>
                                    <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 1'></Expandable>
                                    <Expandable text='Subdocument 2'></Expandable>
                                </Expandable>
                                <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Document 2'>
                                    <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 3'></Expandable>
                                    <Expandable text='Subdocument 4'></Expandable>
                                </Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/mail.svg' text='Send Email'>
                                <Expandable text='Compose New Email'></Expandable>
                                <Expandable text='Check Inbox'></Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/calendar.svg' text='Schedule Event'>
                                <Expandable text='Create New Event'></Expandable>
                                <Expandable text='View Upcoming Events'></Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/settings.svg' text='Settings'>
                                <Expandable text='General Settings'></Expandable>
                                <Expandable text='Privacy and Security'></Expandable>
                                <Expandable text='Notifications'></Expandable>
                            </Expandable>
                        </ExpandableProvider>
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

export default ExpandableDemo;
