'use client'

import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';


export default function Home() {


  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button text='Toggle modal' variant='primary' handleClick={async () => setShowModal(!showModal)} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <h3>Are you absolutely sure?</h3>
          <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            <Button text='Cancel' variant='secondary' handleClick={async () => setShowModal(false)} />
            <Button text='Continue' variant='primary' handleClick={async () => setShowModal(false)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
