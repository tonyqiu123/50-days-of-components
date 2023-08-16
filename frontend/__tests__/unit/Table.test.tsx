import React from 'react';
import { render } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/Table/Table';

describe('Table components', () => {
  it('renders Table component', () => {
    const { getByText } = render(<Table>Table Content</Table>);
    const tableElement = getByText('Table Content');
    expect(tableElement).toBeInTheDocument();
  });

  it('renders TableHeader component', () => {
    const { getByText } = render(<TableHeader>Header Content</TableHeader>);
    const headerElement = getByText('Header Content');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders TableHead component', () => {
    const { getByText } = render(<TableHead>Head Content</TableHead>);
    const headElement = getByText('Head Content');
    expect(headElement).toBeInTheDocument();
  });

  it('renders TableBody component', () => {
    const { getByText } = render(<TableBody>Body Content</TableBody>);
    const bodyElement = getByText('Body Content');
    expect(bodyElement).toBeInTheDocument();
  });

  it('renders TableRow component', () => {
    const { getByText } = render(<TableRow>Row Content</TableRow>);
    const rowElement = getByText('Row Content');
    expect(rowElement).toBeInTheDocument();
  });

  it('renders TableCell component', () => {
    const { getByText } = render(<TableCell>Cell Content</TableCell>);
    const cellElement = getByText('Cell Content');
    expect(cellElement).toBeInTheDocument();
  });
});
