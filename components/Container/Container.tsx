import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = ""
}: ContainerProps) {
  return <div className={clsx("px-4 lg:px-56", className)}>{children}</div>;
}
