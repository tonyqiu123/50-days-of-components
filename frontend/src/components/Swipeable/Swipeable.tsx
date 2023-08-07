import React, { cloneElement, useRef, ReactElement, useState, useEffect } from 'react';
import './Swipeable.css'


interface SwipeableProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  closeDirection?: 'up' | 'down' | 'left' | 'right';
  closeTravel?: number;
  children: React.ReactNode;
  transition?: string;
  className?: string;
}

const Swipeable: React.FC<SwipeableProps> = ({ className = '', visible, setVisible, closeDirection = 'right', closeTravel = 150, children, transition = 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)' }) => {

  let transformToHide = `translate${closeDirection === 'up' || closeDirection === 'down' ? 'Y' : 'X'}(${closeDirection === 'up' || closeDirection === 'left' ? '-' : ''}100%)`

  const [transitionStyle, setTransitionStyle] = useState(transition)
  const [transform, setTransform] = useState(transformToHide)
  const [modal, setModal] = useState<any>(null)

  let dragging = false
  let mouseDownClientY = 0
  let mouseDownClientX = 0
  let dragTravel = 0
  const modalRef = useRef<any>()


  const handleMouseDown = (event: any) => {
    const target = event.target;
    const interactiveElements = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'];
    if (interactiveElements.includes(target.tagName) || target.isContentEditable) {
      // Allow interactive elements and contenteditable elements to receive focus
      return;
    }

    event.preventDefault();
    dragging = true;
    mouseDownClientY = event.clientY;
    mouseDownClientX = event.clientX;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    setTransitionStyle('');
  };


  const handleMouseMove = (event: any) => {
    if (dragging) {
      switch (closeDirection) {
        case 'up':
          dragTravel = mouseDownClientY - event.clientY
          break;
        case 'down':
          dragTravel = event.clientY - mouseDownClientY
          break;
        case 'left':
          dragTravel = mouseDownClientX - event.clientX
          break;
        default:
          dragTravel = event.clientX - mouseDownClientX
      }
      if (dragTravel >= 0) {
        setTransform(`translate${closeDirection === 'up' || closeDirection === 'down' ? 'Y' : 'X'}(${closeDirection === 'up' || closeDirection === 'left' ? '-' : ''}${dragTravel}px)`)
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    setTransitionStyle(transition)
    dragging = false
    if (dragTravel > closeTravel) {
      setVisible(false)
      setTransform(transformToHide)
    } else {
      setTransform('')
    }
    dragTravel = 0
  };


  useEffect(() => {
    if (modalRef.current) {
      setModal(modalRef.current)
      if (visible) {
        setTransform('')
      } else {
        setTransform(transformToHide)
      }
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      if (modal) {
        modal.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [modal, visible, handleMouseDown, handleMouseMove, handleMouseUp, transformToHide]);


  return (
    <div className={`swipeable ${className} ${closeDirection}`} ref={modalRef} onMouseDown={handleMouseDown} style={{ position: 'fixed', transition: `${transitionStyle}`, transform: `${transform}` }} >
      {children}
    </div>
  );
};

export default Swipeable;
