import clsx from "clsx";
import Body from "../Body/Body";

type ProductInfoTextParts = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

export default function ProductInfoText({
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
  className = ""
}: ProductInfoTextParts) {
  return (
    <div className={clsx("flex flex-row", className)}>
      <div className="w-full">
        <Body
          fontSize="text-xs"
          color="text-info"
          fontWeight="font-medium"
          className={titleClassName}
        >
          {title}
        </Body>
      </div>
      <div className="w-full">
        <Body
          fontSize="text-xs"
          color="text-secondary"
          fontWeight="font-medium"
          className={descriptionClassName}
        >
          {description}
        </Body>
      </div>
    </div>
  );
}
