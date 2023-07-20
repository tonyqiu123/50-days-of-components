import React, { FC, ChangeEvent, useState } from 'react';
import './Slider.css'; // Importing CSS for our slider

interface SliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  darkMode?: boolean;
  fullWidth?: boolean;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ min=0, max=100, defaultValue = 0, onChange = () => { }, darkMode = false, fullWidth=false }) => {

  const [value, setValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    onChange(Number(event.target.value));
  };

  return (
      <input
        type="range"
        className={`${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
  );
};

export default Slider;
