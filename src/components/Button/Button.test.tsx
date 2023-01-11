import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders button', () => {
    const buttonText = 'Teste';

    render(<Button variant="primary">{buttonText}</Button>);
    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  it('button onClick event', () => {
    const buttonText = 'Teste';
    const mockFunction = jest.fn();

    render(
      <Button variant="primary" onClick={mockFunction}>
        {buttonText}
      </Button>
    );

    const button = screen.getByText(buttonText);

    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
  });
});
