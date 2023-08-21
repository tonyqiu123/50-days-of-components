'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Alert from '@/components/Alert/Alert';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const reactCode = `const [showAlert, setShowAlert] = useState<boolean>(false)

    <Alert darkMode={isDarkMode} showAlert={showAlert} setShowAlert={setShowAlert}>
       <Card darkMode={isDarkMode} style={{ maxWidth:'600px' }}>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <h4>Are you absolutely sure?</h4>
               <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
               <div style={{ display: 'flex', gap: '8px', margin: '8px 0 0 auto' }}>
                   <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Cancel' variant='outline' size='l' />
                   <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Continue' variant='primary' size='l' />
               </div>
           </div>
       </Card>
   </Alert>`;


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Alert component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Button darkMode={isDarkMode} variant='outline' text='Toggle alert' handleClick={async () => setShowAlert(prev => !prev)} />
                        <Alert darkMode={isDarkMode} showAlert={showAlert} setShowAlert={setShowAlert}>
                            <Card darkMode={isDarkMode} style={{ maxWidth:'600px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <h4>Are you absolutely sure?</h4>
                                    <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                                    <div style={{ display: 'flex', gap: '8px', margin: '8px 0 0 auto' }}>
                                        <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Cancel' variant='outline' size='l' />
                                        <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Continue' variant='primary' size='l' />
                                    </div>
                                </div>
                            </Card>
                        </Alert>
                    </div>
                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 