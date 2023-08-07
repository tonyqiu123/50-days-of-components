import React, { cloneElement, useRef, ReactElement, useState, useEffect } from 'react';

interface SwipeableProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  closeDirection?: 'up' | 'down' | 'left' | 'right';
  closeTravel?: number;
  children: ReactElement;
}

const Swipeable: React.FC<SwipeableProps> = ({ visible, setVisible, closeDirection = 'right', closeTravel = 100, children }) => {

  let transformToHide = ''
  switch (closeDirection) {
    case 'up':
      transformToHide = 'translateY(-100%)'
      break;
    case 'down':
      transformToHide = 'translateY(100%)'
      break;
    case 'left':
      transformToHide = 'translateX(-100%)'
      break;
    default:
      transformToHide = 'translateX(100%)'
  }

  const [transition, setTransition] = useState('transform 500ms cubic-bezier(0.32, 0.72, 0, 1)')
  const [transform, setTransform] = useState(transformToHide)
  const [modal, setModal] = useState<any>(null)

  let dragging = false
  let mouseDownClientX = 0
  let dragTravel = 0
  const modalRef = useRef<HTMLDivElement>()

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    dragging = true
    switch (closeDirection) {
      case 'up':
        mouseDownClientX = event.clientY
        break;
      case 'down':
        mouseDownClientX = event.clientY
        break;
      case 'left':
        mouseDownClientX = event.clientX
        break;
      default:
        mouseDownClientX = event.clientX
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    setTransition('')
  };

  const handleMouseMove = (event: any) => {
    if (dragging) {
      switch (closeDirection) {
        case 'up':
          dragTravel = mouseDownClientX - event.clientY
          break;
        case 'down':
          dragTravel = event.clientY - mouseDownClientX
          break;
        case 'left':
          dragTravel = mouseDownClientX - event.clientX
          break;
        default:
          dragTravel = event.clientX - mouseDownClientX
      }
      if (dragTravel >= 0) {
        switch (closeDirection) {
          case 'up':
            setTransform(`translateY(-${dragTravel}px)`)
            break;
          case 'down':
            setTransform(`translateY(${dragTravel}px)`)
            break;
          case 'left':
            setTransform(`translateX(-${dragTravel}px)`)
            break;
          default:
            setTransform(`translateX(${dragTravel}px)`)
        }
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    setTransition('transform 500ms cubic-bezier(0.32, 0.72, 0, 1)')
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
  }, [modal, visible]);


  return (
    <>
      {cloneElement(children, {
        style: {
          position: 'fixed',
          transition: `${transition}`,
          transform: `${transform}`
        },
        ref: modalRef,
        onMouseDown: handleMouseDown,
      })}
    </>
  );
};

export default Swipeable;
