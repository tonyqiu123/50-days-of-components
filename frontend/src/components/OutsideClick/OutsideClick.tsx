import React, { useEffect, useRef, ReactElement, FC } from 'react';

type Props = {
    children: ReactElement;
    onClickOutside: () => void;
}

const OutsideClick: FC<Props> = ({ children, onClickOutside }) => {
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
        <div ref={wrapperRef}>
            {children}
        </div>
    )
};

export default OutsideClick;
