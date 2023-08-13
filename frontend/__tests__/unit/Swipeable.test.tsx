import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Swipeable from '@/components/Swipeable/Swipeable';

describe('Swipeable Component', () => {
  it('applies correct transformation on drag', () => {
    const setVisible = jest.fn();
    render(
      <Swipeable visible={true} setVisible={setVisible}>
        <div data-testid="children">Content</div>
      </Swipeable>
    );
    
    const swipeable = screen.getByTestId('swipeable');
    fireEvent.mouseDown(swipeable, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(swipeable, { clientX: 50, clientY: 50 });

    expect(swipeable).toHaveStyle('transform: translateX(-50px);');

    fireEvent.mouseUp(swipeable);

    expect(swipeable).toHaveStyle('transform: translateX(-100%);');
    expect(setVisible).toHaveBeenCalled();
  });

  it('cancels drag if not moved enough', () => {
    const setVisible = jest.fn();
    render(
      <Swipeable visible={true} setVisible={setVisible}>
        <div data-testid="children">Content</div>
      </Swipeable>
    );
    
    const swipeable = screen.getByTestId('swipeable');
    fireEvent.mouseDown(swipeable, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(swipeable, { clientX: 95, clientY: 95 });

    expect(swipeable).toHaveStyle('transform: translateX(0);');
    expect(setVisible).not.toHaveBeenCalled();
  });

  it('closes on drag if moved enough', () => {
    const setVisible = jest.fn();
    render(
      <Swipeable visible={true} setVisible={setVisible}>
        <div data-testid="children">Content</div>
      </Swipeable>
    );
    
    const swipeable = screen.getByTestId('swipeable');
    fireEvent.mouseDown(swipeable, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(swipeable, { clientX: 200, clientY: 100 });

    fireEvent.mouseUp(swipeable);

    expect(swipeable).toHaveStyle('transform: translateX(-100%);');
    expect(setVisible).toHaveBeenCalled();
  });

  // Add more tests as needed
});
