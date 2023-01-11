import Body from '../components/Body/Body'
import Button from '../components/Button/Button'
import H1 from '../components/H1/H1'
import Container from '../components/Container/Container'
import ProductCard, { Card } from '../components/ProductCard/ProductCard'
import Head from 'next/head'

const cards: Card[] = [
  {
    id: 1,
    name: 'Abzan Beastmaster',
    image: '/abzan-beastmaster.jpeg',
    price: 10,
    quantity: 10,
  },
  {
    id: 2,
    name: 'Falling Timber',
    image: '/falling-timber.jpeg',
    price: 10.5,
    quantity: 8,
  },
  {
    id: 3,
    name: 'Sentinel Tower',
    image: '/sentinel-tower.jpeg',
    price: 0.5,
    quantity: 2,
  },
  {
    id: 4,
    name: 'Sentinel Tower',
    image: '/sentinel-tower.jpeg',
    price: 0.5,
    quantity: 2,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Calabouço do Android</title>
      </Head>
      <div className="flex flex-col gap-2">
        <Container className="flex flex-col gap-4 items-start  lg:gap-16 lg:flex-row ">
          <div className="flex flex-col gap-4 items-start">
            <H1>Calabouço do Android</H1>
            <Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quasi ipsam esse sit dolore a voluptatum sed architecto corporis,
              harum sapiente aut quo sint quidem autem molestiae magnam. Minus,
              cumque.
            </Body>
            <Button type="button" variant="primary" className="max-w-xs">
              Click me
            </Button>
          </div>
        </Container>
        <div className="bg-light-gray mt-14 w-128"></div>
        <Container>
          <H1>Promoções</H1>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-4">
            {cards.map((card, index) => (
              <ProductCard key={index} card={card} />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
