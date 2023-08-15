
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

describe('MultiSelect component', () => {
  const mockSelected: string[] = [];
  const mockSetSelected = jest.fn();
  const mockQueries = ['Option 1', 'Option 2', 'Option 3'];
  const mockDarkMode = false;
  const mockPlaceholder = 'Search';

  it('renders without crashing', () => {
    render(
      <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
      />
    );
  });

  it('adds a new item to selected items', () => {
    const { getByText, getByPlaceholderText } = render(
      <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
      />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);
    
    fireEvent.change(searchInput, { target: { value: 'Option 1' } });
    fireEvent.click(addButton);

    const addedItem = getByText('Option 1');
    expect(addedItem).toBeInTheDocument();
  });

  it('displays an error for duplicate selection', () => {
    const { getByText, getByPlaceholderText } = render(
      <MultiSelect
        selected={['Option 2']}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
      />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);

    fireEvent.change(searchInput, { target: { value: 'Option 2' } });
    fireEvent.click(addButton);

    const errorElement = getByText('Duplicate');
    expect(errorElement).toBeInTheDocument();
  });

  it('displays an error for item not found', () => {
    const { getByText, getByPlaceholderText } = render(
      <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        queries={mockQueries}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
      />
    );

    const addButton = getByText('Add');
    const searchInput = getByPlaceholderText(mockPlaceholder);

    fireEvent.change(searchInput, { target: { value: 'Invalid Option' } });
    fireEvent.click(addButton);

    const errorElement = getByText('Not found within list');
    expect(errorElement).toBeInTheDocument();
  });

  it('displays an error for empty input', () => {
    const { getByText } = render(
      <MultiSelect
        selected={mockSelected}
        setSelected={mockSetSelected}
        darkMode={mockDarkMode}
        placeholder={mockPlaceholder}
      />
    );

    const addButton = getByText('Add');

    fireEvent.click(addButton);

    const errorElement = getByText('Cannot be empty');
    expect(errorElement).toBeInTheDocument();
  });
});
