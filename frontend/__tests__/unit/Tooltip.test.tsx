import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Tooltip from '@/components/Tooltip/Tooltip';

describe('Tooltip Component', () => {
  it('renders Tooltip component correctly', () => {
    const toolTipText = 'This is a tooltip';
    const darkMode = false;
    render(
      <Tooltip toolTipText={toolTipText} darkMode={darkMode}>
        Hover me
      </Tooltip>
    );
    const tooltipElement = screen.getByText(toolTipText);
    expect(tooltipElement).toBeInTheDocument();
  });

  it('displays tooltip on hover', () => {
    const toolTipText = 'This is a tooltip';
    const darkMode = false;
    render(
      <Tooltip toolTipText={toolTipText} darkMode={darkMode}>
        Hover me
      </Tooltip>
    );
    const tooltipIcon = screen.getByAltText('tooltipicon');
    fireEvent.mouseEnter(tooltipIcon);
    const tooltipHoverBox = screen.getByText(toolTipText);
    expect(tooltipHoverBox).toHaveClass('active');
  });

  it('hides tooltip on mouse leave', () => {
    const toolTipText = 'This is a tooltip';
    const darkMode = false;
    render(
      <Tooltip toolTipText={toolTipText} darkMode={darkMode}>
        Hover me
      </Tooltip>
    );
    const tooltipIcon = screen.getByAltText('tooltipicon');
    fireEvent.mouseEnter(tooltipIcon);
    const tooltipHoverBox = screen.getByText(toolTipText);
    fireEvent.mouseLeave(tooltipHoverBox);
    expect(tooltipHoverBox).not.toHaveClass('active');
  });

  // Add more tests as needed
});
