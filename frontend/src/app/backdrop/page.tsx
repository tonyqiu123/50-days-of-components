'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Backdrop from '@/components/Backdrop/Backdrop';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const BackdropDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showBackdrop, setShowBackdrop] = useState(false);

    const reactCode = `import Backdrop from '@/components/Backdrop/Backdrop';
    
<Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
<Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />`;

    const tsxCode = `import React, { useEffect } from 'react';
    import './Backdrop.css';
    
    type BackdropProps = {
        setShowBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
        showBackdrop: boolean;
        darkMode?: boolean;
    };
    
    const Backdrop: React.FC<BackdropProps> = ({ setShowBackdrop, showBackdrop, darkMode = false }) => {
        useEffect(() => {
            if (showBackdrop) {
                // Disable scrolling when backdrop is active
                document.body.style.overflow = 'hidden';
            } else {
                // Re-enable scrolling when backdrop is not active
                document.body.style.overflow = 'auto';
            }
    
            // Cleanup: Re-enable scrolling when component is unmounted
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, [showBackdrop]);
    
        return (
            <div
                onClick={() => setShowBackdrop(false)}
                className={\` \${darkMode && 'darkMode'} backdrop \${showBackdrop ? 'showBackdrop' : ''}\`}
            ></div>
        );
    };
    
    export default Backdrop;
    
`

    const cssCode = `.backdrop {
    pointer-events: none;
    opacity: 0;
    z-index: 1000;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.808);
    backdrop-filter: blur(2px);
    inset: 0;
    height: 100vh;
    width: 100vw;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.backdrop.darkMode {
    background-color: rgba(0, 0, 0, 0.596);
}

.showBackdrop {
    pointer-events: unset;
    opacity: 1;
}`

    const unitTestCode = `import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import Backdrop from '@/components/Backdrop/Backdrop';
    
    describe('Backdrop component', () => {
      it('should render correctly with default props', () => {
        const setShowBackdrop = jest.fn();
        const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} />);
        
        expect(container).toMatchSnapshot();
      });
    
      it('should call setShowBackdrop when clicked', () => {
        const setShowBackdrop = jest.fn();
        const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} />);
        
        const backdropElement = container.querySelector('.backdrop');
        if (backdropElement) {
          fireEvent.click(backdropElement);
          expect(setShowBackdrop).toHaveBeenCalledTimes(1);
          expect(setShowBackdrop).toHaveBeenCalledWith(false);
        }
      });
    
      it('should apply darkMode class when darkMode prop is true', () => {
        const setShowBackdrop = jest.fn();
        const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} darkMode={true} />);
        
        const backdropElement = container.querySelector('.backdrop');
        expect(backdropElement).toHaveClass('darkMode');
      });
    
      it('should include additional classes passed via className prop', () => {
        const setShowBackdrop = jest.fn();
        const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} className="custom-class" />);
        
        const backdropElement = container.querySelector('.backdrop');
        expect(backdropElement).toHaveClass('custom-class');
      });
    
      it('should have "showBackdrop" class when showBackdrop prop is true', () => {
        const setShowBackdrop = jest.fn();
        const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} />);
        
        const backdropElement = container.querySelector('.backdrop');
        expect(backdropElement).toHaveClass('showBackdrop');
      });
    });
    
`

    return (
        <React.Fragment>

            <h4>Day 20 / 50</h4>
            <Spacer y={2} />
            <h1>Backdrop component</h1>
            <Spacer y={4} />
            <p>Day 20, one fifth complete of the journey! The "Backdrop" component serves to display a blurred, 'pointer-event-less' overlap on the web. Used in nearly all applications, and used in many components including modals, sheets, alerts, and dialogs.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Backdrop' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=N4yV-UQnAFA' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
                        <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />
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

export default BackdropDemo;
