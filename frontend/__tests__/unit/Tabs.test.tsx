import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';

describe('Tabs Components', () => {
  it('renders Tabs component correctly', () => {
    const darkMode = false;
    render(
      <Tabs darkMode={darkMode}>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </Tabs>
    );
    const tabsElement = screen.getByTestId('tabs');
    expect(tabsElement).toBeInTheDocument();
  });

  it('renders TabsTrigger component correctly', () => {
    const value = 'tab1';
    const active = true;
    const setActiveTab = jest.fn();
    render(
      <TabsTrigger value={value} active={active} setActiveTab={setActiveTab}>
        Tab 1
      </TabsTrigger>
    );
    const tabsTriggerElement = screen.getByTestId('tabsTrigger');
    expect(tabsTriggerElement).toBeInTheDocument();
    fireEvent.click(tabsTriggerElement);
    expect(setActiveTab).toHaveBeenCalledWith(value);
  });

  it('renders TabsContent component correctly when active', () => {
    const active = true;
    render(
      <TabsContent value="tab1" active={active}>
        Content of Tab 1
      </TabsContent>
    );
    const tabsContentElement = screen.getByTestId('tabsContent');
    expect(tabsContentElement).toBeInTheDocument();
  });

  it('does not render TabsContent component when not active', () => {
    const active = false;
    render(
      <TabsContent value="tab1" active={active}>
        Content of Tab 1
      </TabsContent>
    );
    const tabsContentElement = screen.queryByTestId('tabsContent');
    expect(tabsContentElement).toBeNull();
  });

  // Add more tests as needed
});
