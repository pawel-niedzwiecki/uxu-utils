import { Wrapper } from './component.alert.style';
import { Link } from './..';
import { ComponentAlertType } from './component.alert.type';

export const Alert: ComponentAlertType = ( {tel, title, ...props} ) => {
  return (
    <Wrapper {...props}>
      {tel && (
        <Link href={`tel:${tel.replace ( /\s+/g, '' )}`} title={tel}>
          {tel}
        </Link>
      )}
      <span>{title}</span>
    </Wrapper>
  );
}
