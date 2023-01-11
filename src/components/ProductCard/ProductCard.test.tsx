import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductCard, { Card } from './ProductCard'
import ProductInfoText from './ProductInfoText'

const card: Card = {
  id: 1,
  name: 'Abzan Beastmaster',
  image: '/abzan-beastmaster.jpeg',
  price: 10,
  quantity: 10,
}

describe('Product Card', () => {
  it('renders product card', () => {
    render(<ProductCard card={card} />)
    expect(screen.getByText(card.name)).toBeInTheDocument()
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', `${card.name} Image`)
  })
})

describe('Product Info Text', () => {
  it('renders product info text', () => {
    const title = 'Test Title'
    const description = 'Test Description'

    render(<ProductInfoText title={title} description={description} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
