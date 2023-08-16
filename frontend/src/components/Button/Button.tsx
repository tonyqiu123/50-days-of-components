import React, { ButtonHTMLAttributes, useState } from 'react';
import './Button.css';
import Image from 'next/image';

type ButtonProps = {
  text: string;
  variant: 'primary' | 'secondary' | 'outline';
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
      className={`button ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''} ${size} ${variant} ${isLoading ? 'loading' : ''
        }`}

    >
      <React.Fragment>
        <p>{text}</p>
        {imageSrc && <Image style={{ filter: `${darkMode ? 'invert(1)' : 'invert(0)'}` }} src={imageSrc} alt='' height={14} width={14} />}
      </React.Fragment>
      <Image className='loading' src="/Button/loading.svg" alt="Loading" width={14} height={14} />
    </button>
  );
};

export default Button;
