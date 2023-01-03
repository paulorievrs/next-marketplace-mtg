type prop = "text" | "bg" | "border" | "shadow";
type colors = "primary"
| "secondary"
| "info"
| "info-light"
| "white"
| "red";

export type Color = `${prop}-${colors}`

export default function getColor(color: Color): Color {
  return color;
}