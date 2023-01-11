import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MenuItems from './MenuItems';

const checkIfItemIsOnPage = (item: string) => {
  const menuItem = screen.getByText(item);
  expect(menuItem).toBeInTheDocument();
};

describe('Menu', () => {
  it('renders menu items', () => {
    const menuItemsMobile = ['Teste', 'Teste2', 'Teste3'];
    const menuItemsWeb = ['Teste4', 'Teste5', 'Teste6'];

    render(<MenuItems type="web" items={menuItemsWeb} />);
    render(<MenuItems type="mobile" items={menuItemsMobile} />);

    menuItemsWeb.forEach(checkIfItemIsOnPage);
    menuItemsMobile.forEach(checkIfItemIsOnPage);
  });
});
