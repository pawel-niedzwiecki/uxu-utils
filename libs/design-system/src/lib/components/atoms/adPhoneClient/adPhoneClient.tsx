import { Link, Container } from './..';
import {Phone} from 'react-feather'
import styles from './adPhoneClient.module.scss';
import { AdPhoneClient } from './types';

export function AdPhoneClient({ tel, title }: AdPhoneClient) {
  return (
    <div className={styles.wrapper}>
      <Container>
      {tel && (
        <Link href={`tel:${tel.replace ( /\s+/g, '' )}`} title={tel} >
          <Phone style={{marginRight: "1.5rem"}}/>{tel}
        </Link>
      )}
      <span>{title}</span>
      </Container>
    </div>
  );
}
