import { Link } from './..';
import {Phone} from 'react-feather'
import { Wrapper } from './component.alert.style';
import { ComponentAlertType } from './component.alert.type';

export const Alert: ComponentAlertType = ( {tel, title, ...props} ) => {
  return (
    <Wrapper {...props}>
      {tel && (
        <Link href={`tel:${tel.replace ( /\s+/g, '' )}`} title={tel} style={{display: 'flex', justifyContent: 'center'}}>
          <Phone style={{marginRight: "1.5rem"}}/>{tel}
        </Link>
      )}
      <span>{title}</span>
    </Wrapper>
  );
}
