import React, { FC, HTMLAttributes, useEffect } from 'react';
import './Breadcrumb.css';

type BreadcrumbProps = {
    darkMode?: boolean;
    start?: number;
    end?: number;
} & HTMLAttributes<HTMLElement>;

const Breadcrumb: FC<BreadcrumbProps> = ({ darkMode = false, start = 2, end, ...props }) => {
    // Initialize a state to hold the current URL
    const [currentURL, setCurrentURL] = React.useState('');

    useEffect(() => {
        // Get the current URL from the window location
        setCurrentURL(window.location.href);
    }, []);

    // Split the URL into parts using '/'
    const urlParts = currentURL.split('/');

    const endIndex = end !== undefined ? end : urlParts.length;

    return (
        <div className={`breadcrumb ${darkMode ? 'darkMode' : ''}`} {...props}>
            {urlParts.slice(start, endIndex).map((part, index) => {
                // Build the URL segment based on the current index
                const urlSegment = urlParts.slice(0, start + index + 1).join('/');
                return (
                    <React.Fragment key={index}>
                        {index > 0 && <p>/</p>}
                        <a className='breadcrumbItem' href={urlSegment}>{part}</a>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
