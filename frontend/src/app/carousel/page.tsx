'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Carousel from '@/components/Carousel/Carousel';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [name, setName] = useState('');
    const [search, setSearch] = useState<string>('');

    const exampleFunction = async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
                    resolve();
                }, 500);
            } catch (error) {
                console.error(error);
                throw error;
            }
        });
    };

    const reactCode = `import Carousel from '@/components/Carousel/Carousel';

<Carousel className='carouselDemo'>
    <Image src='/Carousel/dorm.png' alt='dorm' layout="fill" objectFit="cover" />
    <Image src='/Carousel/floorLounge.png' alt='floorLounge' layout="fill" objectFit="cover" />
    <Image src='/Carousel/gym.png' alt='gym' layout="fill" objectFit="cover" />
    <Image src='/Carousel/mainFloor.png' alt='mainFloor' layout="fill" objectFit="cover" />
    <Image src='/Carousel/outside.png' alt='outside' layout="fill" objectFit="cover" />
    <Image src='/Carousel/pianoRoom.png' alt='pianoRoom' layout="fill" objectFit="cover" />
    <Image src='/Carousel/poolTable.png' alt='poolTable' layout="fill" objectFit="cover" />
</Carousel>`

    const tsxCode = `import React, { useState, useRef, useEffect, HTMLAttributes } from 'react';
import './Carousel.css'
import Image from 'next/image';

type CarouselProps = {
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [btnClicked, setBtnClicked] = useState<'left' | 'right'>('left')

    const childrenArray = React.Children.toArray(children);
    const maxIndex = childrenArray.length - 1

    const handleLeftArrowClick = () => {
        setBtnClicked('left')
        if (currentIndex === 0)
            setCurrentIndex(maxIndex)
        else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleRightArrowClick = () => {
        setBtnClicked('right')
        if (currentIndex === maxIndex)
            setCurrentIndex(0)
        else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const getClassName = (index: number): string => {
        if (btnClicked === 'left') {
            if (currentIndex === index) {
                return 'leftToInView'
            }
            else if (currentIndex === index - 1 || currentIndex === maxIndex && index === 0) {
                return 'inViewToRight'
            }
        }
        else if (btnClicked === 'right') {
            if (currentIndex === index) {
                return 'rightToInView'
            }
            else if (currentIndex === index + 1 || currentIndex === 0 && index === maxIndex) {
                return 'inViewToLeft'
            }
        }

        return 'hidden';
    }

    return (
        <div {...props} className={\`carousel \${props.className ? props.className : ''} \`}>
            <Image onClick={handleLeftArrowClick} src='/Carousel/leftArrow.svg' alt='' width={26} height={26} />
            {childrenArray.map((child, index) => (
                <div key={index} className={\`\${getClassName(index)} carouselImage\`}>
                    {child}
                </div>
            ))}
            <div className='carouselDotContainer'>
                {childrenArray.map((_, index) => (
                    <div key={index} className={\`\${currentIndex === index && 'active'} carouselDot\`}></div>
                ))}
            </div>
            <Image onClick={handleRightArrowClick} src='/Carousel/rightArrow.svg' alt='' width={26} height={26} />
        </div>
    );
};

export default Carousel`

    const cssCode = `.carousel {
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
}

.carousel:hover>img {
    opacity: 0.7 !important;
}

.carousel>img {
    z-index: 3;
    border-radius: 50%;
    cursor: pointer;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);

    opacity: 0;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
}

.carousel>img:hover {
    opacity: 1 !important;
}

.carousel>img:last-of-type {
    left: auto;
    right: 16px;
}


.carouselDotContainer {
    transform: translateX(-50%);
    position: absolute;
    bottom: 16px;
    left: 50%;
    display: flex;
    gap: 8px;
}

.carouselDot {
    width: 5px;
    height: 5px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.459);
    transition: all 200ms cubic-bezier(.2, .69, .56, .76);
}

.active.carouselDot {
    width: 24px;
    background-color: rgba(255, 255, 255, 0.959) !important;
}

.carouselImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateY(100%);
}

.inViewToLeft {
    animation: inViewToLeft 500ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.inViewToRight {
    animation: inViewToRight 500ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.rightToInView {
    animation: rightToInView 500ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.leftToInView {
    animation: leftToInView 500ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes inViewToLeft {
    0% {
        transform: unset;
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes inViewToRight {
    0% {
        transform: unset;
    }

    100% {
        transform: translateX(100%);
    }
}

@keyframes rightToInView {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: unset;
    }
}

@keyframes leftToInView {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: unset;
    }
}`

    const unitTestCode = `import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import Carousel from '@/components/Carousel/Carousel';

describe('Carousel Component', () => {

    it('displays children correctly', () => {
    const { queryAllByTestId } = render(
        <Carousel>
        <div data-testid="carousel-image">Slide 1</div>
        <div data-testid="carousel-image">Slide 2</div>
        <div data-testid="carousel-image">Slide 3</div>
        </Carousel>
    );

    const carouselImages = queryAllByTestId('carousel-image');
    expect(carouselImages).toHaveLength(3); // Assuming you have a data-testid on the carouselImage elements
    });

    it('updates current index on left arrow click', () => {
    const { container } = render(
        <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(leftArrow!);
    // Assert that the currentIndex is updated as expected
    });

    it('updates current index on right arrow click', () => {
    const { container } = render(
        <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(rightArrow!);
    // Assert that the currentIndex is updated as expected
    });

    it('changes active dot on arrow click', async () => {
    const { container } = render(
        <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');
    const dots = container.querySelectorAll('.carouselDot');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
    expect(dots).toHaveLength(3);

    fireEvent.click(rightArrow!);
    await waitFor(() => expect(dots[1]).toHaveClass('active'));

    fireEvent.click(leftArrow!);
    await waitFor(() => expect(dots[0]).toHaveClass('active'));
    });
});
`

    return (
        <React.Fragment>

            <h1>Carousel component</h1>
            <Spacer y={4} />
            <p>The Carousel component in web development is a UI element that rotates through a series of content items when interacted with. Carousels are typically used in software like e-commerce websites to display a variety of products in a limited space, photo galleries for showcasing a collection of images, mobile apps for onboarding screens, and homepages for highlighting multiple pieces of important content, offering a visually engaging way to compact multiple pieces of content on a single screen.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Carousel' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=CQMOWi0HVhQ' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Carousel className='carouselDemo'>
                            <Image src='/Carousel/dorm.png' alt='dorm' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/floorLounge.png' alt='floorLounge' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/gym.png' alt='gym' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/mainFloor.png' alt='mainFloor' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/outside.png' alt='outside' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/pianoRoom.png' alt='pianoRoom' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/poolTable.png' alt='poolTable' layout="fill" objectFit="cover" />
                        </Carousel>
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

export default CarouselDemo;
