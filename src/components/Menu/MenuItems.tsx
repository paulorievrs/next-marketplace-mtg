import { Color } from '../../utils/getColor'
import Body from '../Body/Body'

export default function MenuItems({ type }: { type: 'web' | 'mobile' }) {
  const color: Color = type === 'web' ? 'text-primary' : 'text-white'

  const MenuItem = ({ children }: { children: React.ReactNode }) => (
    <Body
      color={color}
      className="cursor-pointer hover:text-light-info transition-all duration-300 ease"
    >
      {children}
    </Body>
  )

  return (
    <>
      <MenuItem>Categorias</MenuItem>
      <MenuItem>Categorias</MenuItem>
      <MenuItem>Categorias</MenuItem>
      <MenuItem>Categorias</MenuItem>
    </>
  )
}
