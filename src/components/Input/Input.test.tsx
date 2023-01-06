import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders input', () => {
    const inputName = 'Input';

    render(
      <Input
        name={inputName}
        placeholder={inputName}
        type="text"
        register={jest.fn()}
      />
    );
    expect(screen.getByPlaceholderText(inputName)).toBeInTheDocument();
    expect(screen.getByLabelText(inputName)).toBeInTheDocument();
  });
});
