import Body from '../Body/Body'
import ArrowRight from '../icons/ArrowRight'
import IconProps from '../icons/IconProps'

type TextWithIconProps = {
  text: string
  Icon?: (_: IconProps) => JSX.Element
  onClick?: () => void
}

export default function TextWithIcon({
  text,
  Icon = ArrowRight,
  onClick = () => null,
}: TextWithIconProps) {
  return (
    <div
      className="flex flex-row justify-between items-center cursor-pointer w-full mt-8"
      onClick={onClick}
    >
      <Body fontWeight="font-bold" color="text-light-info" fontSize="text-lg">
        {text}
      </Body>
      <Icon />
    </div>
  )
}
