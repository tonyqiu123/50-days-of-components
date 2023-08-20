import { HTMLAttributes, useEffect, useState } from "react";
import './ScrollArea.css'

type ScrollAreaProps = {
    darkMode?: boolean
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const ScrollArea: React.FC<ScrollAreaProps> = ({ darkMode = false, children, ...props }) => {
    const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        const calculateMaxHeight = () => {
            const scrollAreaElement = document.querySelector(".scrollArea") as HTMLElement;
            if (scrollAreaElement) {
                const viewportHeight = window.innerHeight;
                const scrollAreaTop = scrollAreaElement.offsetTop;
                const calculatedMaxHeight = viewportHeight - scrollAreaTop;
                setMaxHeight(calculatedMaxHeight);
            }
        };



        calculateMaxHeight();
        window.addEventListener("resize", calculateMaxHeight);

        return () => {
            window.removeEventListener("resize", calculateMaxHeight);
        };
    }, []);



    return (
        <div className={`scrollArea ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`}
            style={{ maxHeight: maxHeight }} // Apply the calculated maxHeight as inline style
            {...props}>
            {children}
        </div>
    );
};

export default ScrollArea;
