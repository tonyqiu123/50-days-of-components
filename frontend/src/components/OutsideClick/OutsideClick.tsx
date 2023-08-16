import React, { useEffect, useRef, ReactElement, FC, HTMLAttributes } from 'react';

type Props = {
    children: ReactElement;
    onClickOutside: () => void;
} & HTMLAttributes<HTMLElement>

const OutsideClick: FC<Props> = ({ children, onClickOutside, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <div {...props} className={`outsideClick ${props.className ? props.className : ''}`} ref={wrapperRef}>
            {children}
        </div>
    )
};

export default OutsideClick;
