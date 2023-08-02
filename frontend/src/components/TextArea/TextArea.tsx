import { ChangeEvent, CSSProperties, useState } from 'react';
import './TextArea.css';

type TextAreaProps = {
    placeholder: string;
    onChange?: (placeholder: string) => void;
    width?: string | number;
    height?: string | number;
    darkMode?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChange = () => { }, width = '100%', height = '150px', darkMode }) => {
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const textareaStyle: CSSProperties = {
        width: typeof width === 'number' ? `${width}%` : width,
        height: typeof height === 'number' ? `${height}%` : height,
    };

    return (
        <textarea
            placeholder={placeholder}
            onChange={handleInputChange}
            style={textareaStyle}
            className={`textarea ${darkMode && 'darkMode'}`}
        />
    );
};

export default TextArea;
