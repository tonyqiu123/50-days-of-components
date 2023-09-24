'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { AccordionContent, Accordion, AccordionTrigger, AccordionProvider } from '@/components/Accordion/Accordion';
import { useGlobal } from '../RootLayout';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';

const AccordionDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import { AccordionContent, Accordion, AccordionTrigger, AccordionProvider } from '@/components/Accordion/Accordion';
    
<AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
    <Accordion>
        <AccordionTrigger name="section1">
            <h2>Section 1</h2>
        </AccordionTrigger>
        <AccordionContent name="section1">
            <p>This is the content for secthis is the conte</p>
        </AccordionContent>
    </Accordion>

    <Accordion>
        <AccordionTrigger name="section2">
            <h2>Section 2</h2>
        </AccordionTrigger>
        <AccordionContent name="section2">
            <p>This is the content for secthis is  </p>
        </AccordionContent>
    </Accordion>
</AccordionProvider>`;

    const tsxCode = `import React, { createContext, useState, useContext, useRef, useEffect, useCallback, HTMLAttributes } from 'react';
    import './Accordion.css'
    import Icon from '@/components/Icon/Icon';
    
    type AccordionContextType = {
        activeName: string | null;
        setActiveName: React.Dispatch<React.SetStateAction<string | null>>;
        darkMode?: boolean
        setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
    }
    
    type AccordionProviderProps = {
        children: React.ReactNode;
        darkMode?: boolean
    } & HTMLAttributes<HTMLElement>
    
    type AccordionProps = {
        children: React.ReactNode;
    } & HTMLAttributes<HTMLElement>
    
    type AccordionTriggerProps = {
        name: string;
        children: React.ReactNode;
    } & HTMLAttributes<HTMLElement>
    
    type AccordionContentProps = {
        name: string;
        children: React.ReactNode;
    } & HTMLAttributes<HTMLElement>
    
    const AccordionContext = createContext<AccordionContextType>({ activeName: null, setActiveName: () => { }, darkMode: false });
    
    const useAccordion = () => useContext(AccordionContext);
    
    export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children, darkMode = false }) => {
        const [activeName, setActiveName] = useState<string | null>(null);
    
        return (
            <AccordionContext.Provider value={{ activeName, setActiveName, darkMode }}>
                <div className={\`accordionProvider \`}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    };
    
    export const Accordion: React.FC<AccordionProps> = ({ children, ...props }) => {
        const { darkMode } = useAccordion();
        return (
            <div {...props} className={\`accordion  \${darkMode && 'darkMode'}\`}>
                {children}
            </div>
        );
    };
    
    
    export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ name, children, ...props }) => {
        const { activeName, setActiveName, darkMode } = useAccordion();
    
        const isActive = name === activeName;
    
        const handleClick = () => {
            setActiveName(isActive ? null : name);
        };
    
        return (
            <div {...props} onClick={handleClick} className={\`accordionTrigger   \${isActive && 'active'} \${darkMode && 'darkMode'}\`}>
                {children}
                <Icon invert={darkMode} image='/Accordion/arrow.svg' alt='' height={16} width={16} />
            </div>
        );
    };
    
    export const AccordionContent: React.FC<AccordionContentProps> = ({ name, children, ...props }) => {
        const { activeName, darkMode } = useAccordion();
        const contentRef = useRef<HTMLDivElement>(null);
        const [height, setHeight] = useState<number | undefined>(0);
    
        const isActive = name === activeName;
    
        const updateHeightOnResize = useCallback(() => {
            if (isActive && contentRef?.current?.scrollHeight) {
                setHeight(contentRef.current.scrollHeight + 16);
            }
        }, [isActive]);
    
        useEffect(() => {
            window.addEventListener('resize', updateHeightOnResize);
    
            return () => {
                window.removeEventListener('resize', updateHeightOnResize);
            };
        }, [updateHeightOnResize]);
    
    
        useEffect(() => {
            if (isActive && contentRef?.current?.scrollHeight) {
                setHeight(contentRef.current.scrollHeight + 16);
            } else {
                setHeight(0)
            }
        }, [isActive]);
    
        return (
            <div
                {...props}
                className={\`accordionContent \${props.className ? props.className : ''} \${isActive ? 'active' : ''}  \${darkMode && 'darkMode'}\`}
                style={{ maxHeight: \`\${height}px\` }}
                ref={contentRef}
            >
                {children}
            </div>
        );
    };`

    const cssCode = `.accordionProvider {
    display: flex;
    flex-direction: column;
}

.accordion {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #d4d4d4;
}

.accordionTrigger {
    padding: 16px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordionTrigger>a {
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.accordionContent {
    max-height: 0;
    overflow: hidden;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    opacity: 0;
}

/* active */
.active.accordionContent {
    padding-bottom: 16px;
    opacity: 1;
}
.active.accordionTrigger>a {
    transform: rotate(-180deg) scaleX(-1);
}

/* darkMode */
.darkMode.accordion {
    border-bottom: 1px solid #313131;
}`

const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  AccordionProvider,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  useAccordion,
} from '@/components/Accordion/Accordion'; // Replace with the correct path

describe('Accordion Components', () => {
  test('Accordion renders children', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <p>Accordion Content</p>
        </Accordion>
      </AccordionProvider>
    );

    const content = getByText('Accordion Content');
    expect(content).toBeInTheDocument();
  });

  test('AccordionTrigger toggles active state', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <AccordionTrigger name="section1">Trigger</AccordionTrigger>
          <AccordionContent name="section1">Content</AccordionContent>
        </Accordion>
      </AccordionProvider>
    );

    const trigger = getByText('Trigger');
    const content = getByText('Content');

    fireEvent.click(trigger);
    expect(content).toHaveClass('active');

    fireEvent.click(trigger);
    expect(content).not.toHaveClass('active');
  });

  test('AccordionContent updates height when active', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <AccordionTrigger name="section2">Trigger</AccordionTrigger>
          <AccordionContent name="section2">Content</AccordionContent>
        </Accordion>
      </AccordionProvider>
    );

    const trigger = getByText('Trigger');
    const content = getByText('Content');

    fireEvent.click(trigger);

    // Assert that the height changes
    expect(content.style.maxHeight).not.toBe('0');
  });

  test('useAccordion returns correct context values', () => {
    const TestComponent = () => {
      const { activeName, setActiveName, darkMode } = useAccordion();
      return (
        <div>
          <p data-testid="activeName">{activeName}</p>
          <p data-testid="darkMode">{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
          <button onClick={() => setActiveName('testSection')}>Set Active</button>
        </div>
      );
    };

    const { getByTestId, getByText } = render(
      <AccordionProvider darkMode={true}>
        <TestComponent />
      </AccordionProvider>
    );

    const activeName = getByTestId('activeName');
    const darkMode = getByTestId('darkMode');
    const setActiveButton = getByText('Set Active');

    expect(activeName).toHaveTextContent('');
    expect(darkMode).toHaveTextContent('Dark Mode');

    fireEvent.click(setActiveButton);
    expect(activeName).toHaveTextContent('testSection');
  });
});`

    return (
        <React.Fragment>

            <h1>Accordion component</h1>
            <Spacer y={4} />
            <p>The accordion component in web development is a UI element that expands to reveal hidden content when clicked. Accordions are typically used in software like e-commerce websites to hide and show product details, FAQs to display answers, mobile apps for navigation menus, and dashboards for presenting layers of data, offering a clean, organized way to condense complex content on a single page.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Accordion' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=VB-EndVW9Gg' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
                            <Accordion>
                                <AccordionTrigger name="section1">
                                    <h2>Section 1</h2>
                                </AccordionTrigger>
                                <AccordionContent name="section1">
                                    <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
                                </AccordionContent>
                            </Accordion>

                            <Accordion>
                                <AccordionTrigger name="section2">
                                    <h2>Section 2</h2>
                                </AccordionTrigger>
                                <AccordionContent name="section2">
                                    <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
                                </AccordionContent>
                            </Accordion>
                        </AccordionProvider>
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

export default AccordionDemo;
