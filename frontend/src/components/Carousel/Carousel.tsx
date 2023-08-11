import React, { useState, useRef, useEffect, HTMLAttributes } from 'react';
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
        <div {...props} className={`carousel ${props.className ? props.className : ''} `}>
            <Image onClick={handleLeftArrowClick} src='/Carousel/leftArrow.svg' alt='' width={26} height={26} />
            {childrenArray.map((child, index) => (
                <div key={index} className={`${getClassName(index)} carouselImage`}>
                    {child}
                </div>
            ))}
            <div className='carouselDotContainer'>
                {childrenArray.map((_, index) => (
                    <div key={index} className={`${currentIndex === index && 'active'} carouselDot`}></div>
                ))}
            </div>
            <Image onClick={handleRightArrowClick} src='/Carousel/rightArrow.svg' alt='' width={26} height={26} />
        </div>
    );
};

export default Carousel