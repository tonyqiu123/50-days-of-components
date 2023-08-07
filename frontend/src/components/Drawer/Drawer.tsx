import React from 'react';
import './Drawer.css';

interface DrawerProps {
  direction?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  children: React.ReactNode;
  darkMode?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ direction = 'top-center', children, darkMode = false }) => {
  return (
    <div>
      <div className={`Drawer ${direction}`}></div>
      {children}
    </div>
  );
};

export default Drawer;
