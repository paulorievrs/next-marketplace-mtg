import Head from "next/head";
import Body from "../components/Body/Body";
import Button from "../components/Button/Button";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import H1 from "../components/H1/H1";
import Container from "../components/Container/Container";
import MyHead from "../components/MyHead/MyHead";

export default function Home() {
  return (
    <>
      <MyHead />
      <div className="flex flex-col gap-2">
        <Container className="flex flex-col gap-4 items-start  lg:gap-16 lg:flex-row ">
          <div className="flex flex-col gap-4 items-start ">
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
          <ProductCarousel />
        </Container>
      </div>
    </>
  );
}
