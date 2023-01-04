import Body from "../Body/Body";
import ArrowRight from "../icons/ArrowRight";

type NextPageProps = {
  pageTitle: string;
  //linkTo: string;
  Icon?: () => JSX.Element;
  onClick?: () => void;
};

export default function NextPage({
  pageTitle,
  Icon = ArrowRight,
  onClick = () => {}
}: NextPageProps) {
  return (
    <div
      className="flex flex-row justify-between items-center cursor-pointer w-full mt-8"
      onClick={onClick}
    >
      <Body fontWeight="font-bold" color="text-light-info" fontSize="text-lg">
        {pageTitle}
      </Body>
      <Icon />
    </div>
  );
}
