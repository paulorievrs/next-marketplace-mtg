import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CloseIcon from '../icons/CloseIcon'
import TextWithIcon from './TextWithIcon'

describe('Text With Icon', () => {
  it('renders text with icon', () => {
    const text = 'Test Text'

    const { container } = render(<TextWithIcon text={text} Icon={CloseIcon} />)
    expect(screen.getByText(text)).toBeInTheDocument()
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
