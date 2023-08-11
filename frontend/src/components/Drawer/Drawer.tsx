import React, { HTMLAttributes, ReactNode } from "react";
import './Drawer.css'
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

type DrawerProps = {
  children: ReactNode;
  darkMode?: boolean;
  showDrawer: boolean
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>; 
} & HTMLAttributes<HTMLElement>

const Drawer: React.FC<DrawerProps> = ({ children, darkMode = false, showDrawer = false, setShowDrawer, ...props}) => {

  return (
    <div {...props} className={`drawer ${darkMode && "darkMode"} ${props.className ? props.className : ''}`}>
      <Backdrop darkMode={darkMode} showBackdrop={showDrawer} setShowBackdrop={setShowDrawer} />
      <Swipeable className='drawerContent' closeDirection="down" visible={showDrawer} setVisible={setShowDrawer}>
        {children}
      </Swipeable>
    </div>
  );
};

export default Drawer