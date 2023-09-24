'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import ToastProvider from '@/components/Toast/ToastProvider';
import Toast from '@/components/Toast/Toast';
import Button from '@/components/Button/Button';

const ToastDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)
  const [showToast3, setShowToast3] = useState(false)
  const [showToast4, setShowToast4] = useState(false)
  const [showToast5, setShowToast5] = useState(false)

  const reactCode = `import Toast from '@/components/Toast/Toast'

const [showToast1, setShowToast1] = useState(false)
const [showToast2, setShowToast2] = useState(false)
const [showToast3, setShowToast3] = useState(false)
const [showToast4, setShowToast4] = useState(false)
const [showToast5, setShowToast5] = useState(false)
    
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

</ToastProvider>`;

  const tsxCodeToast = `import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Toast.css';
import Image from 'next/image';
import Swipeable from '../Swipeable/Swipeable';

type ToastProps = {
    children?: React.ReactNode;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
    showToast: boolean;
    darkMode?: boolean;
} & HTMLAttributes<HTMLElement>;

const Toast: React.FC<ToastProps> = ({
    children,
    setShowToast,
    showToast,
    darkMode = false,
    ...props
}) => {
    const [shouldRender, setShouldRender] = useState(showToast);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (showToast) {
            setShouldRender(true);
            if (timeout) {
                clearTimeout(timeout);
            }
        } else {
            timeout = setTimeout(() => {
                setShouldRender(false);
            }, 200);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [showToast]);

    useEffect(() => {
        if (showToast) {
            const timeout = setTimeout(() => {
                setShowToast(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [showToast, setShowToast]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div {...props} className={\`\${props.className ? props.className : ''} \${darkMode && 'darkMode'} toast \${showToast && 'showToast'}\`}>
            <Image
                onMouseDown={() => setShowToast(false)}
                width={12}
                height={12}
                alt="close toast"
                src="/Toast/closeIcon.svg"
            />
            {children}
        </div>
    );
};

export default Toast;
`

const tsxCodeToastProvider = `import React, { useEffect, useState, useRef } from 'react';
import './Toast.css'

interface ToastProviderProps {
    children?: React.ReactNode
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    return (
        <div className='toastProvider'>
            {children}
        </div>
    );
};

export default ToastProvider;
`

  const cssCode = `.toastProvider {
    position: fixed;
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1001;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
}

.toast {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: fit-content;
    position: relative;
    opacity: 0;
    pointer-events: none;
    background-color: white;
    border: 1px solid #d4d4d4;
    padding: 24px;
    z-index: 1001;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.toast>img {
    position: absolute;
    filter: brightness(65%);
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.toast>img:hover {
    filter: brightness(0);
}

.toast.darkMode>img:hover {
    filter: brightness(1);
}

.toast.darkMode {
    background-color: #09090B;
    border: 1px solid #313131;
}

.showToast {
    pointer-events: unset;
    opacity: 1;
}`


  const unitTestCode = `import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Toast from '@/components/Toast/Toast';

describe('Toast Component', () => {
  it('renders Toast component correctly', () => {
    const setShowToast = jest.fn();
    const showToast = true;
    const darkMode = false;
    render(
      <Toast data-testid='toast' setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const toastElement = screen.getByTestId('toast');
    expect(toastElement).toBeInTheDocument();
  });

  it('calls setShowToast when close icon is clicked', () => {
    const setShowToast = jest.fn();
    const showToast = true;
    const darkMode = false;
    render(
      <Toast setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const closeIcon = screen.getByAltText('close toast');
    fireEvent.mouseDown(closeIcon);
    expect(setShowToast).toHaveBeenCalledWith(false);
  });

  it('does not render Toast component when showToast is false', () => {
    const setShowToast = jest.fn();
    const showToast = false;
    const darkMode = false;
    render(
      <Toast setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const toastElement = screen.queryByTestId('toast');
    expect(toastElement).toBeNull();
  });

  // Add more tests as needed
});
`

  return (
    <React.Fragment>

      <h4>Day 9 / 50</h4>
      <Spacer y={2} />
      <h1>Toast component</h1>
      <Spacer y={4} />
      <p>The Toast component provides a toast notification feature. It allows you to display brief messages or notifications to the user in a non-intrusive way. What makes this toast unique among ones developed by shadcn or mantine, is that you can have multiple toasts at the same time that will stack on top of each other in the correct order as you activate them. This component is in beta.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Toast' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=O49qJP5IMbQ' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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

      <Spacer y={4} />
      <Separator darkMode={isDarkMode} orientation='h' />
      <Spacer y={8} />
      <h1>Component Code</h1>
      <Spacer y={4} />
      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='tsxToast'><p>Toast.tsx</p></TabsTrigger>
        <TabsTrigger value='tsxToastProvider'><p>ToastProvider.tsx</p></TabsTrigger>
        <TabsTrigger value='css'><p>css</p></TabsTrigger>
        <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

        <TabsContent value='tsxToast'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCodeToast} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>

        <TabsContent value='tsxToastProvider'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCodeToastProvider} darkMode={isDarkMode} />
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

export default ToastDemo;
