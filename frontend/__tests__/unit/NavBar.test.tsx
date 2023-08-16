import React from 'react';
import { render } from '@testing-library/react';
import { NavBar, NavBarLeft, NavBarRight, useNavbar } from '@/components/NavBar/NavBar';

describe('NavBar Components', () => {
  it('renders NavBar with children', () => {
    const { getByText } = render(
      <NavBar>
        <p>Navbar Content</p>
      </NavBar>
    );

    const content = getByText('Navbar Content');
    expect(content).toBeInTheDocument();
  });

  it('renders NavBarLeft with children', () => {
    const { getByText } = render(
      <NavBarLeft>
        <p>Left Content</p>
      </NavBarLeft>
    );

    const content = getByText('Left Content');
    expect(content).toBeInTheDocument();
  });

  it('renders NavBarRight with children', () => {
    const { getByText } = render(
      <NavBarRight>
        <p>Right Content</p>
      </NavBarRight>
    );

    const content = getByText('Right Content');
    expect(content).toBeInTheDocument();
  });

  it('uses NavbarContext in NavBarLeft', () => {
    const { getByTestId } = render(
      <NavBarLeft>
        <p data-testid="navbar-left">Left Content</p>
      </NavBarLeft>
    );

    const content = getByTestId('navbar-left');
    expect(content).not.toHaveClass('darkMode');
  });

  it('uses NavbarContext in NavBarRight', () => {
    const { getByTestId } = render(
      <NavBarRight>
        <p data-testid="navbar-right">Right Content</p>
      </NavBarRight>
    );

    const content = getByTestId('navbar-right');
    expect(content).not.toHaveClass('darkMode');
  });

  // Add more tests as needed
});
