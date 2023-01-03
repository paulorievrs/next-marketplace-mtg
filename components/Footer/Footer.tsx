import Body from "../Body/Body";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <div className="flex flex-col  items-center pt-14 pb-16 gap-8 bg-dark-primary mt-24 md:flex-row md:justify-center md:gap-40">
      <Body fontWeight="font-black" fontSize="text-base" color="text-white">
        Calabouço do Android
      </Body>
      <Body fontWeight="font-bold" fontSize="text-sm" color="text-white">
        +7 7172 264 55 55
      </Body>
      <div className="w-[130px]">
        <Button variant="outline">Заказать звонок</Button>
      </div>
    </div>
  );
}
