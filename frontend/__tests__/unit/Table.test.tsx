import React from 'react';
import { render } from '@testing-library/react';
import Table from '@/components/Table/Table';

describe('Table components', () => {
  it('renders Table component', () => {
    const { getByText } = render(<Table>Table Content</Table>);
    const tableElement = getByText('Table Content');
    expect(tableElement).toBeInTheDocument();
  });

  it('renders TableHeader component', () => {
    const { getByText } = render(<Table.Header>Header Content</Table.Header>);
    const headerElement = getByText('Header Content');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders TableHead component', () => {
    const { getByText } = render(<Table.Head>Head Content</Table.Head>);
    const headElement = getByText('Head Content');
    expect(headElement).toBeInTheDocument();
  });

  it('renders TableBody component', () => {
    const { getByText } = render(<Table.Body>Body Content</Table.Body>);
    const bodyElement = getByText('Body Content');
    expect(bodyElement).toBeInTheDocument();
  });

  it('renders TableRow component', () => {
    const { getByText } = render(<Table.Row>Row Content</Table.Row>);
    const rowElement = getByText('Row Content');
    expect(rowElement).toBeInTheDocument();
  });

  it('renders TableCell component', () => {
    const { getByText } = render(<Table.Cell>Cell Content</Table.Cell>);
    const cellElement = getByText('Cell Content');
    expect(cellElement).toBeInTheDocument();
  });
});
