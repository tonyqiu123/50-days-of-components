'use client'

import React, { useState } from 'react';
// import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function Home() {


  // const [showModal, setShowModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>
      {/* <Button text='Toggle modal' variant='primary' handleClick={async () => setShowModal(!showModal)} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <h3>Are you absolutely sure?</h3>
          <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            <Button text='Cancel' variant='secondary' handleClick={async () => setShowModal(false)} />
            <Button text='Continue' variant='primary' handleClick={async () => setShowModal(false)} />
          </div>
        </div>
      </Modal> */}
      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
        <p>Combine EC2 purchase options in a single EC2 ASG</p>
      </Tooltip>
    </div>
  );
};
