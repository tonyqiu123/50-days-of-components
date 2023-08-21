import React, { HTMLAttributes, useEffect, useState } from 'react';

type AvatarImageProps = {
    src: string;
} & HTMLAttributes<HTMLElement>

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, ...props }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <img
            {...props}
            src={src}
            alt="Avatar"
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
        />
    );
};

type AvatarFallbackProps = {
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};

type AvatarProps = {
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

export const Avatar: React.FC<AvatarProps> = ({ children, ...props }) => {
    const [firstChildLoaded, setFirstChildLoaded] = useState(false);

    useEffect(() => {
        if (!firstChildLoaded) {
            setFirstChildLoaded(true);
        }
    }, [firstChildLoaded]);

    const firstChild = React.Children.toArray(children)[0];
    const secondChild = React.Children.toArray(children)[1];

    return (
        <div {...props}>
            {firstChildLoaded ? firstChild : null}
            {firstChildLoaded ? null : secondChild}
        </div>
    );
};