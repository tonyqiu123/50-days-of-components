'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const ButtonDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Button from '@/components/Button/Button';

<Button
    handleClick={async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
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
/>`

    const tsxCode = `import React, { ButtonHTMLAttributes, useState } from 'react';
import './Button.css';
import Image from 'next/image';

type ButtonProps = {
    text: string;
    variant: 'primary' | 'secondary' | 'outline' | 'destructive';
    imageSrc?: string
    isDisabled?: boolean;
    isFullWidth?: boolean;
    darkMode?: boolean;
    size?: 's' | 'm' | 'l'
    handleClick?: () => Promise<void>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    size = 'm',
    imageSrc,
    darkMode = false,
    isDisabled = false,
    handleClick,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
    if (!isDisabled && !isLoading && handleClick) {
        setIsLoading(true);
        try {
        await handleClick();
        } catch (error) {
        console.error(error);
        }
        setIsLoading(false);
    }
    };

    return (
    <button
        disabled={isDisabled}
        onClick={onClick}
        {...props}
        className={\`button \${darkMode ? 'darkMode' : ''} \${props.className ? props.className : ''} \${size} \${variant} \${isLoading ? 'loading' : ''
        }\`}

    >
        <React.Fragment>
        <p>{text}</p>
        {imageSrc && <Image style={{ filter: \`\${darkMode ? 'invert(1)' : 'invert(0)'}\` }} src={imageSrc} alt='' height={14} width={14} />}
        </React.Fragment>
        <Image className='loading' src="/Button/loading.svg" alt="Loading" width={14} height={14} />
    </button>
    );
};

export default Button;
`

    const cssCode = `/* sizes */
.s.button {
    font-size: 12px;
    padding: 8px 12px;
}

.m.button {
    font-size: 14px;
    padding: 8px 16px;
}

.l.button {
    font-size: 16px;
    padding: 10px 16px;
}

.button {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.button,
.button>.loading,
.button>p {
    white-space: nowrap;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

/* primary */

.primary.button {
    color: white;
    border: 1px solid #78c0ff;
    background-color: #1b83dd;
}

.primary.button:hover {
    background-color: #1e96ff;
}

/* secondary */
.secondary.button {
    background-color: #f3f3f3;
    border: none;
}

.secondary.button>.loading {
    filter: brightness(0);
}

.darkMode.secondary.button {
    background-color: #3a3a3a;
    border: 1px solid #3a3a3a;
}

.darkMode.secondary.button:hover {
    background-color: #3a3a3a;
}


/* outline */

.outline.button {
    background-color: #ffffff;
    border: 1px solid #E2E2E2;
}

.outline.button:hover {
    background-color: #f8f8f8;
}

.outline.button>.loading {
    filter: brightness(0);
}

.darkMode.outline.button {
    background-color: #000000;
    border: 1px solid #3a3a3a;
}

.darkMode.outline.button:hover {
    background-color: #3a3a3a;
}

/* destructive */

.destructive.button {
    background-color: #e90f0f;
    border: 1px solid #E2E2E2;
}

.destructive.button:hover {
    background-color: #c42727;
}

.destructive.button>.loading {
    filter: brightness(0);
}

.darkMode.destructive.button {
    background-color: #d11c1c;
    border: 1px solid #3a3a3a;
}

.darkMode.destructive.button:hover {
    background-color: #d83030;
}


/* loading */
.loading.button>p {
    opacity: 0;
}

.loading.button>.loading {
    opacity: 1;
}

.button>.loading {
    opacity: 0;
    width: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotateAnimation 2s infinite linear;
}

@keyframes rotateAnimation {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}`

    const unitTestCode = `import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import Button from '@/components/Button/Button';

describe('Button component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Button text="Click me" variant="primary" />);
        expect(container).toBeInTheDocument();
    });

    it('renders with the correct text', () => {
        const buttonText = 'Click me';
        const { getByText } = render(<Button text={buttonText} variant="primary" />);
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('renders with the primary variant class', () => {
        const { container } = render(<Button text="Click me" variant="primary" />);
        expect(container.firstChild).toHaveClass('primary');
    });

    it('disables the button when isDisabled is true', () => {
        const { container } = render(<Button text="Click me" variant="primary" isDisabled />);
        expect(container.firstChild).toBeDisabled();
    });

    it('calls handleClick when clicked and is not disabled', async () => {
        const handleClickMock = jest.fn(() => Promise.resolve());
        const { getByText } = render(<Button text="Click me" variant="primary" handleClick={handleClickMock} />);
        fireEvent.click(getByText('Click me'));
        await waitFor(() => expect(handleClickMock).toHaveBeenCalledTimes(1));
    });
});

`

    return (
        <React.Fragment>

            <h4>Day 1 / 50</h4>
            <Spacer y={2} />
            <h1>Button component</h1>
            <Spacer y={4} />
            <p>A versatile button component that can be easily integrated into any project. The component offers various functionalities and customization options, making it suitable for virtually all use cases.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Button' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=BPU72Nlz4pM' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button
                            handleClick={async () => {
                                return new Promise<void>(resolve => {
                                    try {
                                        setTimeout(() => {
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

export default ButtonDemo;
