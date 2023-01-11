import clsx from 'clsx';
import { Color } from '../../utils/getColor';
import Body from '../Body/Body';

type LinkProps = {
  color: Color;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Link({
  color,
  children,
  onClick = () => null,
}: LinkProps) {
  const hoverColor = color === 'text-primary' ? 'text-light-info' : 'text-info';

  return (
    <Body
      color={color}
      onClick={onClick}
      className={clsx(
        'cursor-pointer hover:text-light-info transition-all duration-300 ease',
        `hover:${hoverColor}`
      )}
    >
      {children}
    </Body>
  );
}
