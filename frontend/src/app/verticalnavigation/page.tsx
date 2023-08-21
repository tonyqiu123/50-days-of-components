'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [selected1, setSelected1] = useState<string>('Profile')
    const [selected2, setSelected2] = useState<string>('VerticalNavigation')

    const reactCode = `<VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
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
</VerticalNavigation>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>VerticalNavigation component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
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

                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <VerticalNavigation selected={selected2} setSelected={setSelected2} darkMode={isDarkMode}>
                            <VerticalNavigationHeader text='Components' />
                            <VerticalNavigationLink text='Accordion' />
                            <VerticalNavigationLink text='AspectRatio' />
                            <VerticalNavigationLink text='Backdrop' />
                            <VerticalNavigationLink text='Badge' />
                            <VerticalNavigationLink text='Breadcrumb' />
                            <VerticalNavigationLink text='Checkbox' />
                            <VerticalNavigationLink text='Combobox' />
                            <VerticalNavigationLink text='Command' />
                            <VerticalNavigationLink text='Counter' />
                            <VerticalNavigationLink text='DragNDrop' />
                            <VerticalNavigationLink text='Drawer' />
                            <VerticalNavigationLink text='Dropdown' />
                            <VerticalNavigationLink text='Expandable' />
                            <VerticalNavigationLink text='HoverCard' />
                            <VerticalNavigationLink text='Modal' />
                            <VerticalNavigationLink text='MultiSelect' />
                            <VerticalNavigationLink text='ShowMore' />
                            <VerticalNavigationLink text='Skeleton' />
                            <VerticalNavigationLink text='Switch' />
                            <VerticalNavigationLink text='Table' />
                            <VerticalNavigationLink text='Tabs' />
                            <VerticalNavigationLink text='TextArea' />
                            <VerticalNavigationLink text='Toast' />
                            <VerticalNavigationLink text='Tooltip' />
                            <VerticalNavigationLink text='VerticalNavigation' />
                        </VerticalNavigation>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 