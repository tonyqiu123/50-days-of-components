'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Alert from '@/components/Alert/Alert';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const AlertDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showAlert, setShowAlert] = useState<boolean>(false)

    const reactCode = `import Alert from '@/components/Alert/Alert';
    
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

    const tsxCode = `import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Alert.css'
import Backdrop from '../Backdrop/Backdrop';


type AlertProps = {
    children?: React.ReactNode
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
    showAlert: boolean
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const Alert: React.FC<AlertProps> = ({ children, setShowAlert, showAlert, darkMode = false, ...props }) => {

    return (
        <React.Fragment >
            <div {...props} className={\`\${props.className ? props.className : ''} \${darkMode && 'darkMode'} alert \${showAlert ? 'showAlert' : ''}\`}>
                {children}
            </div>
            <Backdrop darkMode={darkMode} showBackdrop={showAlert} setShowBackdrop={() => {}} />
        </React.Fragment>
    );
};

export default Alert;
`

    const cssCode = `.alert {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    z-index: 1001;
    transition: all 300ms cubic-bezier(0.32, 0.72, 0, 1);
}

.showAlert {
    pointer-events: unset;
    opacity: 1;
}

.alert.showAlert {
    perspective: 1000px;
    /* This gives depth perception */
    transform: translate(-50%, -50%);
}`

    const unitTestCode = `import React from 'react';
import { render } from '@testing-library/react';
import Alert from '@/components/Alert/Alert';

describe('Alert Component', () => {
    it('should render with default class names', () => {
        const { container } = render(<Alert setShowAlert={() => { }} showAlert={true} />);
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).not.toHaveClass('darkMode');
        expect(alertElement).toHaveClass('showAlert');
    });

    it('should render with dark mode class when darkMode prop is true', () => {
        const { container } = render(<Alert setShowAlert={() => { }} showAlert={true} darkMode={true} />);
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).toHaveClass('darkMode');
        expect(alertElement).toHaveClass('showAlert');
    });

    it('should render with custom additional class name', () => {
        const { container } = render(
            <Alert setShowAlert={() => { }} showAlert={true} className="customClassName" />
        );
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).toHaveClass('showAlert');
        expect(alertElement).toHaveClass('customClassName');
    });

    it('should render with children', () => {
        const { container, getByText } = render(
            <Alert setShowAlert={() => { }} showAlert={true}>
                <span>Test Children</span>
            </Alert>
        );
        const alertElement = container.firstChild;
        const childrenElement = getByText('Test Children');

        expect(alertElement).toContainElement(childrenElement);
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 45 / 50</h4>
            <Spacer y={2} />
            <h1>Alert component</h1>
            <Spacer y={4} />
            <p>The alert component in web development is a crucial tool for displaying important messages or notifications to users, ensuring timely communication of critical information. By providing a visually distinct and attention-grabbing element, the alert component enhances user experience by highlighting key updates or warnings on a website or application.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Alert' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=TZ2XizQdzZg' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button darkMode={isDarkMode} variant='outline' text='Toggle alert' handleClick={async () => setShowAlert(prev => !prev)} />
                        <Alert darkMode={isDarkMode} showAlert={showAlert} setShowAlert={setShowAlert}>
                            <Card darkMode={isDarkMode} style={{ maxWidth: '600px' }}>
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
                    <ShowMore darkMode={isDarkMode}>
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

export default AlertDemo;
