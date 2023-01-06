import { Color } from '../../utils/getColor';
import Body from '../Body/Body';

type MenuItemProps = {
  type: 'web' | 'mobile';
  items: string[];
};

export default function MenuItems({ type, items }: MenuItemProps) {
  const color: Color = type === 'web' ? 'text-primary' : 'text-white';

  const MenuItem = ({ children }: { children: React.ReactNode }) => (
    <Body
      color={color}
      className="cursor-pointer hover:text-light-info transition-all duration-300 ease"
    >
      {children}
    </Body>
  );

  return (
    <>
      {items.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </>
  );
}
