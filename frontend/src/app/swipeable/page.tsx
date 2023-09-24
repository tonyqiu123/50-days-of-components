'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Sheet from '@/components/Sheet/Sheet';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';

const SwipeableDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showSheet, setShowSheet] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [search, setSearch] = useState<string>('')

    const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());

    const reactCode = `import Sheet from '@/components/Sheet/Sheet'
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Checkbox from '@/components/Checkbox/Checkbox';


const [showSheet, setShowSheet] = useState(false)
const [input1, setInput1] = useState('')
const [input2, setInput2] = useState('')
const [search, setSearch] = useState<string>('')

const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());

<Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
<Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
    <h3>Example Sheet</h3>
    <p>First Name</p>
    <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
    <p>Last Name</p>
    <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
    <p>Birthday</p>
    <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder='Select Year'
        fullWidth={true}
        darkMode={isDarkMode}
        queries={years}
        maxHeight='500px'
    />
    <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
    <Button
        handleClick={async () => {
            return new Promise<void>(resolve => {
                try {
                    setTimeout(() => {
                        setShowSheet(false);
                        resolve();
                    }, 500);
                } catch (error) {
                    console.error(error);
                    throw error
                }
            });
        }}
        variant='primary'
        text='Save changes'
    />
</Sheet>`;

    const tsxCode = `import React, { cloneElement, useRef, ReactElement, useState, useEffect, useCallback, HTMLAttributes } from 'react';
import './Swipeable.css'


type SwipeableProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    closeDirection?: 'up' | 'down' | 'left' | 'right';
    closeTravel?: number;
    children: React.ReactNode;
    transition?: string;
} & HTMLAttributes<HTMLElement>;

const Swipeable: React.FC<SwipeableProps> = ({ visible, setVisible, closeDirection = 'right', closeTravel = 150, children, transition = 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)', ...props }) => {

    let transformToHide = \`translate\${closeDirection === 'up' || closeDirection === 'down' ? 'Y' : 'X'}(\${closeDirection === 'up' || closeDirection === 'left' ? '-' : ''}100%)\`

    const [transitionStyle, setTransitionStyle] = useState(transition)
    const [transform, setTransform] = useState(transformToHide)
    const [modal, setModal] = useState<any>(null)

    let dragging = false
    let mouseDownClientY = 0
    let mouseDownClientX = 0
    let dragTravel = 0
    const modalRef = useRef<any>()


    const handleMouseDown = useCallback((event: any) => {
    const target = event.target;
    const interactiveElements = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'];
    if (interactiveElements.includes(target.tagName) || target.isContentEditable) {
        // Allow interactive elements and contenteditable elements to receive focus
        return;
    }

    event.preventDefault();
    dragging = true;
    mouseDownClientY = event.clientY;
    mouseDownClientX = event.clientX;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    setTransitionStyle('');
    }, [closeDirection]);


    const handleMouseMove = useCallback((event: any) => {
    if (dragging) {
        switch (closeDirection) {
        case 'up':
            dragTravel = mouseDownClientY - event.clientY
            break;
        case 'down':
            dragTravel = event.clientY - mouseDownClientY
            break;
        case 'left':
            dragTravel = mouseDownClientX - event.clientX
            break;
        default:
            dragTravel = event.clientX - mouseDownClientX
        }
        if (dragTravel >= 0) {
        setTransform(\`translate\${closeDirection === 'up' || closeDirection === 'down' ? 'Y' : 'X'}(\${closeDirection === 'up' || closeDirection === 'left' ? '-' : ''}\${dragTravel}px)\`)
        }
    }
    }, [closeDirection]);

    const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    setTransitionStyle(transition)
    dragging = false
    if (dragTravel > closeTravel) {
        setVisible(false)
        setTransform(transformToHide)
    } else {
        setTransform('')
    }
    dragTravel = 0
    }, [closeTravel, transformToHide]);


    useEffect(() => {
    if (modalRef.current) {
        setModal(modalRef.current)
        if (visible) {
        setTransform('')
        } else {
        setTransform(transformToHide)
        }
    }
    return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        if (modal) {
        modal.removeEventListener('mousedown', handleMouseDown)
        }
    }
    }, [modal, visible, handleMouseDown, handleMouseMove, handleMouseUp, transformToHide]);


    return (
    <div {...props} className={\`swipeable \${props.className ? props.className : ''}  \${closeDirection}\`} ref={modalRef} onMouseDown={handleMouseDown} style={{ position: 'fixed', transition: \`\${transitionStyle}\`, transform: \`\${transform}\` }} >
        {children}
    </div>
    );
};

export default Swipeable;
`

    const cssCode = `.up {
    width: 100%;
    top: 0;
    left: 0;
}

.down {
    width: 100%;
    bottom: 0;
    left: 0;
}

.left {
    height: 100%;
    left: 0;
    top: 0;
}

.right {
    height: 100%;
    right: 0;
    top: 0;
}

.swipeable {
    position: fixed;
    z-index: 1001;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Swipeable from '@/components/Swipeable/Swipeable';

describe('Swipeable Component', () => {
    it('renders with specified totalStars', () => {
    const { container } = render(<Swipeable totalStars={3} />);
    const stars = container.querySelectorAll('.star');
    expect(stars).toHaveLength(3);
    });

    it('calls handleClick when a star is clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<Swipeable totalStars={5} handleClick={handleClick} />);
    const stars = container.querySelectorAll('.star');
    fireEvent.click(stars[2]);
    expect(handleClick).toHaveBeenCalledWith(3);
    });

    it('fills stars on hover', () => {
    const { container } = render(<Swipeable totalStars={5} />);
    const stars = container.querySelectorAll('.star');
    fireEvent.mouseEnter(stars[3]);
    for (let i = 0; i <= 3; i++) {
        expect(stars[i]).toHaveClass('filled');
    }
    for (let i = 4; i >= 3; i--) {
        fireEvent.mouseLeave(stars[i]);
        expect(stars[i]).not.toHaveClass('filled');
    }
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h1>Swipeable component</h1>
            <Spacer y={4} />
            <p>Today, I want to introduce a Swipeable component that can be easily integrated into any React project. It allows users to select a value from a specified range by dragging a slider handle. Let's dive into its features, installation, usage, props, and code.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Swipeable' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=z5tCuBnRNTg&t=51s' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
                        <Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
                            <h3>Example Sheet</h3>
                            <p>First Name</p>
                            <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
                            <p>Last Name</p>
                            <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
                            <p>Birthday</p>
                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                                placeholder='Select Year'
                                fullWidth={true}
                                darkMode={isDarkMode}
                                queries={years}
                                maxHeight='500px'
                            />
                            <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
                            <Button
                                handleClick={async () => {
                                    return new Promise<void>(resolve => {
                                        try {
                                            setTimeout(() => {
                                                setShowSheet(false);
                                                resolve();
                                            }, 500);
                                        } catch (error) {
                                            console.error(error);
                                            throw error
                                        }
                                    });
                                }}
                                variant='primary'
                                text='Save changes'
                            />
                        </Sheet>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

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

export default SwipeableDemo;
