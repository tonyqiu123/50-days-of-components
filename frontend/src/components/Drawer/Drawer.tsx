import React, { ReactNode } from "react";
import './Drawer.css'
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

interface DrawerProps {
  children: ReactNode;
  darkMode?: boolean;
  showDrawer: boolean
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string
}

const Drawer: React.FC<DrawerProps> = ({ children, darkMode = false, showDrawer = false, setShowDrawer, className = '' }) => {

  return (
    <div className={`drawer ${darkMode && "darkMode"} ${className}`}>
      <Backdrop darkMode={darkMode} showBackdrop={showDrawer} setShowBackdrop={setShowDrawer} />
      <Swipeable className={`drawerContent ${className}`} closeDirection="down" visible={showDrawer} setVisible={setShowDrawer}>
        {children}
      </Swipeable>
    </div>
  );
};

export default Drawer