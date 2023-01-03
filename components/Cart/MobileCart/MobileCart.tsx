import clsx from "clsx";
import CartItem from "./CartItem";

export default function MobileCart() {
  return (
    <div className="block lg:hidden">
      <div
        className={clsx(
          `bg-white px-10 pt-5 pb-8 mt-10 flex flex-col gap-8 shadow`
        )}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
