import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Body from './Body';

describe('Body', () => {
  it('renders body', () => {
    const bodyText = 'Teste';

    render(<Body>{bodyText}</Body>);
    expect(screen.getByText(bodyText)).toBeInTheDocument();
  });
});
