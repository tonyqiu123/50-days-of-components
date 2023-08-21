'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import ToastProvider from '@/components/Toast/ToastProvider';
import Toast from '@/components/Toast/Toast';
import Button from '@/components/Button/Button';

const CarouselDemo: React.FC = () => {

  const { isDarkMode, setIsDarkMode } = useGlobal();
  const reactCode = `<ToastProvider>

  <Toast showToast={showToast1} setShowToast={setShowToast1} darkMode={isDarkMode} >
    <h4>Meeting Scheduled: Project Update</h4>
    <p>Thursday, September 15, 2022 at 10:00 AM</p>
  </Toast>

  <Toast showToast={showToast2} setShowToast={setShowToast2} darkMode={isDarkMode} >
    <h4>Webinar Scheduled: Digital Marketing Strategies</h4>
    <p>Wednesday, October 5, 2022 at 2:30 PM</p>
  </Toast>

  <Toast showToast={showToast3} setShowToast={setShowToast3} darkMode={isDarkMode} >
    <h4>Interview Scheduled: Software Engineer Position</h4>
    <p>Monday, November 7, 2022 at 11:00 AM</p>
  </Toast>

  <Toast showToast={showToast4} setShowToast={setShowToast4} darkMode={isDarkMode} >
    <h4>Appointment Scheduled: Dentist Checkup</h4>
    <p>Tuesday, December 20, 2022 at 3:45 PM</p>
  </Toast>

  <Toast showToast={showToast5} setShowToast={setShowToast5} darkMode={isDarkMode} >
    <h4>Conference Scheduled: Tech Expo 2023</h4>
    <p>Friday, March 24, 2023 at 9:00 AM</p>
  </Toast>

</ToastProvider>`;
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)
  const [showToast3, setShowToast3] = useState(false)
  const [showToast4, setShowToast4] = useState(false)
  const [showToast5, setShowToast5] = useState(false)

  return (
    <React.Fragment >

      <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
      <h1>Toast component</h1>
      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>
        <TabsContent value='preview1'>
          <div className='demoBox'>
            <Button variant='primary' darkMode={isDarkMode} text='Schedule meeting' handleClick={async () => setShowToast1(true)} />
            <Button variant='outline' darkMode={isDarkMode} text='Schedule webinar' handleClick={async () => setShowToast2(true)} />
            <Button variant='outline' darkMode={isDarkMode} text='Schedule interview' handleClick={async () => setShowToast3(true)} />
            <Button variant='outline' darkMode={isDarkMode} text='Schedule appointment' handleClick={async () => setShowToast4(true)} />
            <Button variant='outline' darkMode={isDarkMode} text='Schedule conference' handleClick={async () => setShowToast5(true)} />
            <ToastProvider>

              <Toast showToast={showToast1} setShowToast={setShowToast1} darkMode={isDarkMode} >
                <h4>Meeting Scheduled: Project Update</h4>
                <p>Thursday, September 15, 2022 at 10:00 AM</p>
              </Toast>

              <Toast showToast={showToast2} setShowToast={setShowToast2} darkMode={isDarkMode} >
                <h4>Webinar Scheduled: Digital Marketing Strategies</h4>
                <p>Wednesday, October 5, 2022 at 2:30 PM</p>
              </Toast>

              <Toast showToast={showToast3} setShowToast={setShowToast3} darkMode={isDarkMode} >
                <h4>Interview Scheduled: Software Engineer Position</h4>
                <p>Monday, November 7, 2022 at 11:00 AM</p>
              </Toast>

              <Toast showToast={showToast4} setShowToast={setShowToast4} darkMode={isDarkMode} >
                <h4>Appointment Scheduled: Dentist Checkup</h4>
                <p>Tuesday, December 20, 2022 at 3:45 PM</p>
              </Toast>

              <Toast showToast={showToast5} setShowToast={setShowToast5} darkMode={isDarkMode} >
                <h4>Conference Scheduled: Tech Expo 2023</h4>
                <p>Friday, March 24, 2023 at 9:00 AM</p>
              </Toast>

            </ToastProvider>
          </div>

        </TabsContent>
        <TabsContent value='code'>
          <ShowMore darkMode={isDarkMode} text='Reveal code'  >
            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>
      </Tabs>

    </React.Fragment>
  );
};

export default CarouselDemo; 