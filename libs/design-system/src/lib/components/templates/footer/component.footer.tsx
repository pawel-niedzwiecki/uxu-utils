import { Wrapper } from './component.footer.styles';
import { Box, Container, Grid, Logo } from '../../atoms';
import React from 'react';
import { contents } from '../../../theme';

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid gridTemplateColumns={{ xs: '1fr', m: '250px 1fr 1fr 1fr', l: '250px 1fr 1fr 1fr 1fr ' }} style={{ maxWidth: contents.maxWidth, margin: '0 auto' }} container>
          <Box width="25rem">
            <Logo type="wTrasie" height={{ x: '2rem', s: '2.5rem' }} fill="primary.foreground" />
          </Box>
        </Grid>
      </Container>
    </Wrapper>
  );
}
