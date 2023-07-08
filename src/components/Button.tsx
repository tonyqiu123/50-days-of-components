import React, { ButtonHTMLAttributes, useState } from 'react';

type ButtonProps = {
    text: string;
    variant?: 'primary' | 'destructive' | 'cancel' | 'warning' | 'success';
    isDisabled?: boolean;
    isFullWidth?: boolean;
    handleClick?: () => Promise<void>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ text, variant, isDisabled = false, isFullWidth = false, handleClick,
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
            className={`${variant ? variant : ''} ${isFullWidth ? 'full-width' : ''} ${isLoading ? 'loading' : ''}`}
            {...props}
        >
            {text}
            
        </button>
    );
};

export default Button;
