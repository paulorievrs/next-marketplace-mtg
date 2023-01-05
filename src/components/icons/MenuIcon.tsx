import IconProps from './IconProps'

export default function MenuIcon({
  onClick = () => null,
  className = '',
}: IconProps) {
  return (
    <svg
      width="31"
      height="23"
      viewBox="0 0 31 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <rect width="31" height="3" fill="#2A2D46" />
      <rect y="10" width="31" height="3" fill="#2A2D46" />
      <path d="M0 20H31V23H0V20Z" fill="#2A2D46" />
    </svg>
  )
}
