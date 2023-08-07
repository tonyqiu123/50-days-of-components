import React, { useState } from 'react';
import './Drawer.css';
import Swipeable from '../Swipeable/Swipeable';

interface DrawerProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string
}

const Drawer: React.FC<DrawerProps> = ({ children, className, visible, setVisible }) => {

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <Swipeable closeDirection='down' visible={visible} setVisible={setVisible}>
      {children}
    </Swipeable>
  );
};

export default Drawer;
