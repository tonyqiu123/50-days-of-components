import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  AccordionProvider,
  Accordion,
  AccordionTrigger,
  AccordionContent,
} from '@/components/Accordion/Accordion'; // Replace with the correct path

describe('Accordion Components', () => {
  test('Accordion renders children', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <p>Accordion Content</p>
        </Accordion>
      </AccordionProvider>
    );

    const content = getByText('Accordion Content');
    expect(content).toBeInTheDocument();
  });

  test('AccordionTrigger toggles active state', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <AccordionTrigger name="section1">Trigger</AccordionTrigger>
          <AccordionContent name="section1">Content</AccordionContent>
        </Accordion>
      </AccordionProvider>
    );

    const trigger = getByText('Trigger');
    const content = getByText('Content');

    fireEvent.click(trigger);
    expect(content).toHaveClass('active');

    fireEvent.click(trigger);
    expect(content).not.toHaveClass('active');
  });

  test('AccordionContent updates height when active', () => {
    const { getByText } = render(
      <AccordionProvider>
        <Accordion>
          <AccordionTrigger name="section2">Trigger</AccordionTrigger>
          <AccordionContent name="section2">Content</AccordionContent>
        </Accordion>
      </AccordionProvider>
    );

    const trigger = getByText('Trigger');
    const content = getByText('Content');

    fireEvent.click(trigger);

    // Assert that the height changes
    expect(content.style.maxHeight).not.toBe('0');
  });

});
