import { Header, Wrapper } from './component.footer.styles';
import { Container, Grid, Link, Logo } from '../../atoms';
import React from 'react';
import { contents } from '../../../theme';

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid gridTemplateColumns={{ xs: '1fr', m: '250px 1fr 1fr 1fr', l: '250px 1fr 1fr 1fr 1fr ' }} style={{ maxWidth: contents.maxWidth, margin: '0 auto' }} container>
          <Grid gridRow="1/30" className="brand">
            <Logo type="wTrasie" height={{ x: '2rem', s: '2.5rem' }} fill="primary.foreground" />
            <p>© 2023 UXU </p>
          </Grid>

          {new Array(5).fill(undefined).map(() => (
            <Grid>
              <Header>Miasta</Header>
              <ul>
                <li>
                  <Link href="/" title="uxu">
                    Warszawa
                  </Link>
                </li>
                <li>
                  <Link href="/" title="uxu">
                    Poznań
                  </Link>
                </li>
                <li>
                  <Link href="/" title="uxu">
                    Łódź
                  </Link>
                </li>
                <li>
                  <Link href="/" title="uxu">
                    Gorzów Wielkopolski
                  </Link>
                </li>
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
