import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import H1 from './H1';

describe('H1', () => {
  it('renders h1', () => {
    const h1Text = 'Teste';

    render(<H1>{h1Text}</H1>);
    const h1 = screen.getByText(h1Text);

    expect(h1).toBeInTheDocument();
  });
});
