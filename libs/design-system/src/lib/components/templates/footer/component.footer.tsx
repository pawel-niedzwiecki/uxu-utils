import { Header, Wrapper } from './component.footer.styles';
import { Container, Grid, Link, Logo } from '../../atoms';
import React from 'react';
import { contents } from '../../../theme';
import { ComponentType } from './component.footer.types';

export const Footer: ComponentType = ({ columns }) => {
  return (
    <Wrapper>
      <Container>
        <Grid
          gridTemplateColumns={{
            xs: '1fr',
            s: '250px 1fr 1fr',
            l: '250px 1fr 1fr 1fr',
            xl: '250px 1fr 1fr 1fr 1fr',
          }}
          style={{ maxWidth: contents.maxWidth, margin: '0 auto' }}
          container
        >
          <Grid gridRow="1/30" className="brand">
            <Link href="/" title="uxu">
              <Logo type="wTrasie" height={{ x: '2rem', s: '2.5rem' }} fill="primary.foreground" />
            </Link>
            <p>
              © 2023
              <Link href="https://www.uxu.pl" title="UXU">
                UXU
              </Link>
            </p>
          </Grid>

          {columns?.map(column => (
            <Grid>
              <Header>{column?.header}</Header>
              <ul>
                {column?.link?.map(data => {
                  return (
                    <li>
                      <Link href={data.url} title={data?.title || ''}>
                        {data?.title || ''}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};
