type prop = "text" | "bg" | "border" | "shadow";
type colors = "primary"
| "dark-primary"
| "secondary"
| "info"
| "light-info"
| "light-gray"
| "white"
| "red";

export type Color = `${prop}-${colors}`

export default function getColor(color: Color): Color {
  return color;
}