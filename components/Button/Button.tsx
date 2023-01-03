import clsx from "clsx";

const variants = {
  primary:
    "border-0 h-14 text-sm cursor-pointer shadow-3xl text-white w-full bg-red shadow-light-red transition-all duration-300 ease hover:shadow-4xl hover:shadow-dark-red",
  outline:
    "border border-red text-red h-8 w-full transition-all duration-300 ease hover:bg-red hover:text-white"
};

type ButtonProps = {
  variant: keyof typeof variants;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className = "",
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(variants[variant], className)} {...props}>
      <span className={clsx("font-bold", "text-xs")}>{children}</span>
    </button>
  );
}
