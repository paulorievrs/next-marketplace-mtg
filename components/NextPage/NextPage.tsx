import Body from "../Body/Body";
import ArrowRight from "../icons/ArrowRight";

type NextPageProps = {
  pageTitle: string;
  //linkTo: string;
};

export default function NextPage({ pageTitle }: NextPageProps) {
  return (
    <div className="flex flex-row justify-between items-center cursor-pointer w-full mt-8">
      <Body fontWeight="font-bold" color="text-light-info" fontSize="text-lg">
        {pageTitle}
      </Body>
      <ArrowRight />
    </div>
  );
}
