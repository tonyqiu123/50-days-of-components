import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '@/components/Modal/Modal';

describe('Modal Component', () => {
  it('renders children when showModal is true', () => {
    const { getByText } = render(
      <Modal showModal={true} setShowModal={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );

    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render children when showModal is false', () => {
    const { container } = render(
      <Modal showModal={false} setShowModal={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );

    const modalContent = container.querySelector('.modal');
    expect(modalContent).not.toHaveClass('showModal');
  });

  it('renders in dark mode', () => {
    const { container } = render(
      <Modal showModal={true} setShowModal={() => {}} darkMode>
        <p>Modal Content</p>
      </Modal>
    );

    const modalContainer = container.querySelector('.modal');
    expect(modalContainer).toHaveClass('darkMode');
  });

  // Add more tests as needed
});