import { Montserrat } from "@next/font/google";
import clsx from "clsx";
import { Color } from "../../utils/getColor";
const montserrat = Montserrat({ subsets: ["latin"] });

type BodyProps = {
  children: React.ReactNode;
  fontWeight?: "font-black" | "font-bold" | "font-medium" | "font-normal";
  fontSize?: "text-lg" | "text-base" | "text-sm" | "text-xs";
  color?: Color;
  className?: string;
};

export default function Body({
  children,
  fontWeight = "font-normal",
  fontSize = "text-sm",
  color = "text-primary",
  className = ""
}: BodyProps) {
  return (
    <span
      className={clsx(
        fontSize,
        color,
        fontWeight,
        className,
        montserrat.className
      )}
    >
      {children}
    </span>
  );
}
