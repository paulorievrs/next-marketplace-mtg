import Body from "../Body/Body";

type ProductInfoTextParts = {
  title: string;
  description: string;
};

export default function ProductInfoText({
  title,
  description
}: ProductInfoTextParts) {
  return (
    <div className="flex flex-row">
      <div className="w-full">
        <Body fontSize="text-xs" color="text-info" fontWeight="font-medium">
          {title}
        </Body>
      </div>
      <div className="w-full">
        <Body
          fontSize="text-xs"
          color="text-secondary"
          fontWeight="font-medium"
        >
          {description}
        </Body>
      </div>
    </div>
  );
}
