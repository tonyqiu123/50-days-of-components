'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import ScrollArea from '@/components/ScrollArea/ScrollArea';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation';

const ScrollAreaDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();
  const [selected1, setSelected1] = useState<string>('Profile')
  const [selected2, setSelected2] = useState<string>('ScrollArea')

  const reactCode = `import ScrollArea from '@/components/ScrollArea/ScrollArea';
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation';

const [selected1, setSelected1] = useState<string>('Profile')
const [selected2, setSelected2] = useState<string>('ScrollArea')
    
<ScrollArea style={{ maxHeight: '400px' }} darkMode={isDarkMode}>
  <VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
      <VerticalNavigationHeader text='Account Settings' />
      <VerticalNavigationLink text='Profile' />
      <VerticalNavigationLink text='Verification' />
      <VerticalNavigationLink text='Trust and Verification' />
      <VerticalNavigationLink text='Security' />
      <VerticalNavigationLink text='Notifications' />

      <VerticalNavigationHeader text='Hosting Settings' />
      <VerticalNavigationLink text='Listing Details' />
      <VerticalNavigationLink text='Pricing' />
      <VerticalNavigationLink text='Availability' />
      <VerticalNavigationLink text='Booking Settings' />
      <VerticalNavigationLink text='House Rules' />

      <VerticalNavigationHeader text='Guest Settings' />
      <VerticalNavigationLink text='Search Preferences' />
      <VerticalNavigationLink text='Saved Listings' />
      <VerticalNavigationLink text='Wishlists' />
      <VerticalNavigationLink text='Reviews' />
      <VerticalNavigationLink text='Trips' />

      <VerticalNavigationHeader text='Payment Settings' />
      <VerticalNavigationLink text='Payment Methods' />
      <VerticalNavigationLink text='Payout Preferences' />
      <VerticalNavigationLink text='Transaction History' />
      <VerticalNavigationLink text='Invoices' />
      <VerticalNavigationLink text='Tax Documents' />
  </VerticalNavigation>
</ScrollArea>`

  const tsxCode = `import { HTMLAttributes, useEffect, useState } from "react";
import './ScrollArea.css'

type ScrollAreaProps = {
    darkMode?: boolean
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const ScrollArea: React.FC<ScrollAreaProps> = ({ darkMode = false, children, ...props }) => {
    const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        const calculateMaxHeight = () => {
            const scrollAreaElement = document.querySelector(".scrollArea") as HTMLElement;
            if (scrollAreaElement) {
                const viewportHeight = window.innerHeight;
                const scrollAreaTop = scrollAreaElement.offsetTop;
                const calculatedMaxHeight = viewportHeight - scrollAreaTop;
                setMaxHeight(calculatedMaxHeight);
            }
        };



        calculateMaxHeight();
        window.addEventListener("resize", calculateMaxHeight);

        return () => {
            window.removeEventListener("resize", calculateMaxHeight);
        };
    }, []);



    return (
        <div className={\`scrollArea \${darkMode ? 'darkMode' : ''} \${props.className ? props.className : ''}\`}
            style={{ maxHeight: maxHeight }} // Apply the calculated maxHeight as inline style
            {...props}>
            {children}
        </div>
    );
};

export default ScrollArea;
`

  const cssCode = `.scrollArea {
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 0 0 auto;
}

.scrollArea::-webkit-scrollbar {
    width: 6px;
}

.scrollArea::-webkit-scrollbar-thumb {
    background-color: rgba(212, 212, 212, 0);
}

.scrollArea::-webkit-scrollbar-track {
    background-color: rgb(255, 255, 255);
}

.scrollArea.darkMode::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0);
}


/* Make the scrollbar fully opaque on hover */
.scrollArea:hover::-webkit-scrollbar-thumb {
    background-color: rgba(212, 212, 212, 1);
}

.scrollArea.darkMode:hover::-webkit-scrollbar-thumb {
    background-color: rgba(126, 126, 126, 1);
}`

  return (
    <React.Fragment>

      <h4>Day 42 / 50</h4>
      <Spacer y={2} />
      <h1>ScrollArea component</h1>
      <Spacer y={4} />
      <p>The VerticalNavigation component facilitates easy navigation through vertical menus or sections, enhancing user experience by providing a structured and accessible interface for selecting options or browsing content. It typically displays links or buttons vertically, aiding users in quickly accessing different sections or pages of an application or website.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/ScrollArea' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=nwlP8QuqV4c' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
      </div>
      <Spacer y={4} />
      <Separator darkMode={isDarkMode} orientation='h' />
      <Spacer y={8} />

      <h1>Usage</h1>
      <Spacer y={4} />
      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview1'>
          <div className='demoBox'>
            <ScrollArea style={{ maxHeight: '400px' }} darkMode={isDarkMode}>
              <VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
                <VerticalNavigationHeader text='Account Settings' />
                <VerticalNavigationLink text='Profile' />
                <VerticalNavigationLink text='Verification' />
                <VerticalNavigationLink text='Trust and Verification' />
                <VerticalNavigationLink text='Security' />
                <VerticalNavigationLink text='Notifications' />

                <VerticalNavigationHeader text='Hosting Settings' />
                <VerticalNavigationLink text='Listing Details' />
                <VerticalNavigationLink text='Pricing' />
                <VerticalNavigationLink text='Availability' />
                <VerticalNavigationLink text='Booking Settings' />
                <VerticalNavigationLink text='House Rules' />

                <VerticalNavigationHeader text='Guest Settings' />
                <VerticalNavigationLink text='Search Preferences' />
                <VerticalNavigationLink text='Saved Listings' />
                <VerticalNavigationLink text='Wishlists' />
                <VerticalNavigationLink text='Reviews' />
                <VerticalNavigationLink text='Trips' />

                <VerticalNavigationHeader text='Payment Settings' />
                <VerticalNavigationLink text='Payment Methods' />
                <VerticalNavigationLink text='Payout Preferences' />
                <VerticalNavigationLink text='Transaction History' />
                <VerticalNavigationLink text='Invoices' />
                <VerticalNavigationLink text='Tax Documents' />
              </VerticalNavigation>
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value='preview2'>
          <div className='demoBox'>
            <ScrollArea style={{ maxHeight: '800px' }} darkMode={isDarkMode}>
              <VerticalNavigation selected={selected2} setSelected={setSelected2} darkMode={isDarkMode}>
                <VerticalNavigationHeader text='Components' />
                <VerticalNavigationLink text='Accordion' />
                <VerticalNavigationLink text='AspectRatio' />
                <VerticalNavigationLink text='Backdrop' />
                <VerticalNavigationLink text='Badge' />
                <VerticalNavigationLink text='Breadcrumb' />
                <VerticalNavigationLink text='Button' />
                <VerticalNavigationLink text='Card' />
                <VerticalNavigationLink text='Carousel' />
                <VerticalNavigationLink text='Checkbox' />
                <VerticalNavigationLink text='Combobox' />
                <VerticalNavigationLink text='Command' />
                <VerticalNavigationLink text='Counter' />
                <VerticalNavigationLink text='DragNDrop' />
                <VerticalNavigationLink text='Drawer' />
                <VerticalNavigationLink text='Dropdown' />
                <VerticalNavigationLink text='Expandable' />
                <VerticalNavigationLink text='HoverCard' />
                <VerticalNavigationLink text='Icon' />
                <VerticalNavigationLink text='Input' />
                <VerticalNavigationLink text='Modal' />
                <VerticalNavigationLink text='MultiSelect' />
                <VerticalNavigationLink text='NavBar' />
                <VerticalNavigationLink text='OutsideClick' />
                <VerticalNavigationLink text='Pagination' />
                <VerticalNavigationLink text='Popover' />
                <VerticalNavigationLink text='PrettyCode' />
                <VerticalNavigationLink text='SearchBar' />
                <VerticalNavigationLink text='Select' />
                <VerticalNavigationLink text='Separator' />
                <VerticalNavigationLink text='Sheet' />
                <VerticalNavigationLink text='ShowMore' />
                <VerticalNavigationLink text='Skeleton' />
                <VerticalNavigationLink text='Slider' />
                <VerticalNavigationLink text='StarRating' />
                <VerticalNavigationLink text='Swipeable' />
                <VerticalNavigationLink text='Switch' />
                <VerticalNavigationLink text='Table' />
                <VerticalNavigationLink text='Tabs' />
                <VerticalNavigationLink text='TextArea' />
                <VerticalNavigationLink text='Toast' />
                <VerticalNavigationLink text='Tooltip' />
                <VerticalNavigationLink text='VerticalNavigation' />

              </VerticalNavigation>
            </ScrollArea>
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


      </Tabs>
    </React.Fragment>
  );
};

export default ScrollAreaDemo;
