import { Color } from '../../utils/getColor';
import Link from '../Link/Link';

type MenuItemProps = {
  type: 'web' | 'mobile';
  items: string[];
};

export default function MenuItems({ type, items }: MenuItemProps) {
  const color: Color = type === 'web' ? 'text-primary' : 'text-white';

  return (
    <>
      {items.map((item, index) => (
        <Link key={index} color={color}>
          {item}
        </Link>
      ))}
    </>
  );
}
