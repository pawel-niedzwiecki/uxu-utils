import { Wrapper } from './component.alert.style';
import { Link } from './..';
import { Props } from './component.alert.type';

export function Alert({ tel, title }: Props) {
  return (
    <Wrapper>
      {tel && (
        <Link href={`tel:${tel.replace(/\s+/g, '')}`} title={tel}>
          {tel}
        </Link>
      )}
      <span>{title}</span>
    </Wrapper>
  );
}
