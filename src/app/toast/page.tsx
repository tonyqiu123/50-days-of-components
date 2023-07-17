'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Toast from '@/components/Toast/Toast';
import Tooltip from '@/components/Tooltip/Tooltip';
import ToastProvider from '@/components/Toast/ToastProvider';


export default function toast() {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)
  const [showToast3, setShowToast3] = useState(false)
  const [showToast4, setShowToast4] = useState(false)
  const [showToast5, setShowToast5] = useState(false)


  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Button variant='secondary' text='Schedule meeting' handleClick={async () => setShowToast1(true)} />
      <Button variant='secondary' text='Schedule webinar' handleClick={async () => setShowToast2(true)} />
      <Button variant='secondary' text='Schedule interview' handleClick={async () => setShowToast3(true)} />
      <Button variant='secondary' text='Schedule appointment' handleClick={async () => setShowToast4(true)} />
      <Button variant='secondary' text='Schedule conference' handleClick={async () => setShowToast5(true)} />
      <Tooltip darkMode={isDarkMode} toolTipText='Display brief notifications to the user in a non-intrusive way'>
        <p>Toast Component</p>
      </Tooltip>
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
  );
};
