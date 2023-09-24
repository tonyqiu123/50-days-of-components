'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import StarRating from '@/components/StarRating/StarRating';
import Separator from '@/components/Separator/Separator';

const StarRatingDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import StarRating from '@/components/StarRating/StarRating'
    
<StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />`;

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './StarRating.css';

type StarRatingProps = {
    totalStars: number;
    size?: number
    handleClick?: (value: number) => void
} & HTMLAttributes<HTMLElement>;

const StarRating: React.FC<StarRatingProps> = ({ totalStars, size = 24, handleClick = () => { }, ...props }) => {
    const [filledStars, setFilledStars] = useState<number>(0);
    const [selectedStar, setSelectedStar] = useState<number | null>(null)

    const handleStarHover = (hoveredStars: number): void => {
    setFilledStars(hoveredStars);
    };

    const handleStarLeave = () => {
    if (!selectedStar) {
        setFilledStars(0);
    } else {
        setFilledStars(selectedStar)
    }
    };

    const handleStarClick = (clickedStars: number): void => {
    setFilledStars(clickedStars);
    setSelectedStar(clickedStars)
    handleClick(clickedStars)
    };

    const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= totalStars; i++) {
        stars.push(
        <span
            key={i}
            className={\`star \${filledStars >= i ? 'filled' : ''}\`}
            onMouseEnter={() => handleStarHover(i)}
            onMouseLeave={() => handleStarLeave()}
            onClick={() => handleStarClick(i)}
        >
            ★
        </span>
        );
    }
    return stars;
    };

    return <div {...props} style={{ fontSize: \`\${size}px\` }}  className={\`\${props.className ? props.className : ''} starRating\`}>{renderStars()}</div>;
};

export default StarRating;`

    const cssCode = `.rating-star {
    display: inline-block;
}

.star {
    color: #A0A0A0;
    display: inline-block;
    cursor: pointer;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.star:hover {
    color: gold;
}

.filled {
    color: gold !important; 
}
`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarRating from '@/components/StarRating/StarRating';

describe('StarRating Component', () => {
    it('renders with specified totalStars', () => {
    const { container } = render(<StarRating totalStars={3} />);
    const stars = container.querySelectorAll('.star');
    expect(stars).toHaveLength(3);
    });

    it('calls handleClick when a star is clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<StarRating totalStars={5} handleClick={handleClick} />);
    const stars = container.querySelectorAll('.star');
    fireEvent.click(stars[2]);
    expect(handleClick).toHaveBeenCalledWith(3);
    });

    it('fills stars on hover', () => {
    const { container } = render(<StarRating totalStars={5} />);
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

            <h4>Day 7 / 50</h4>
            <Spacer y={2} />
            <h1>StarRating component</h1>
            <Spacer y={4} />
            <p>Today, I want to introduce a StarRating component that can be easily integrated into any React project. It allows users to select a value from a specified range by dragging a slider handle. Let's dive into its features, installation, usage, props, and code.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/StarRating' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=t_Mkn9QZZmE' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <StarRating handleClick={(numOfStars) => console.log(numOfStars)} totalStars={1000} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
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

export default StarRatingDemo;
