import { useRouter } from "next/router";
import { useState } from "react";
import Body from "../Body/Body";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import MenuItems from "./MenuItems";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleCartClick = () => {
    setIsOpen(false);
    router.push("/carrinho");
  };

  const MobileMenu = () => {
    return (
      <div className="bg-menu-color z-20 fixed right-0 h-screen w-full top-0 md:hidden">
        <div className="flex flex-col items-end justify-between gap-9 pr-5 pt-10">
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <MenuItems type="mobile" />
        </div>
      </div>
    );
  };

  const WebMenu = () => {
    return (
      <div className="hidden md:flex flex-row gap-8 items-center">
        <MenuItems type="web" />
      </div>
    );
  };

  return (
    <div className="sm:relative w-full md:px-52">
      <div className="flex flex-col mb-12 px-4 mt-8 gap-4 md:flex-row md:justify-center md:gap-10">
        <div className="flex flex-row items-center justify-between">
          <span
            className="font-bold text-sm uppercase leading-4 text-light-info w-full lg:whitespace-nowrap cursor-pointer"
            onClick={() => router.push("/")}
          >
            Calabouço do android
          </span>
          <MenuIcon
            onClick={() => setIsOpen(true)}
            className="cursor-pointer md:hidden"
          />
        </div>
        <WebMenu />
        <div className="flex flex-row items-center justify-between md:gap-12">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleCartClick}
          >
            <CartIcon />
            <Body className="w-full whitespace-nowrap" fontWeight="font-bold">
              5 itens
            </Body>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </div>
  );
}
