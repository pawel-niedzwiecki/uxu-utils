import { ComponentChunkHeaderType } from './component.header.chunk.header.types';
import { Box, Col, Grid, Link, Logo } from '../../../../../atoms';
import { FormSearch, StyleSwitch } from '../../../../../organisms';
import React from 'react';

export const ChunkHeader: ComponentChunkHeaderType = ({ isMobile, scroll = false, res, callBack }) => {
  return (
    <Col xs={12} style={{ padding: '0.6rem 1.5rem' }}>
      <Grid
        container
        gridGap="1.5rem"
        gridTemplateRows={{ x: scroll ? '1fr' : '1fr 1fr', s: '1fr' }}
        gridTemplateColumns={{
          x: scroll ? '1fr' : '1fr 1fr',
          s: '175px 1fr 1fr',
        }}
        style={{ alignItems: 'center' }}
      >
        {!(scroll && isMobile) && (
          <>
            <Link href="/" title="wTrasie">
              <Logo type="wTrasie" height={{ x: '2rem', s: '2.5rem' }} fill="primary.foreground" />
            </Link>
            <Box display={{ x: 'flex', s: 'none' }} style={{ justifyContent: 'flex-end', width: '100%' }}>
              <StyleSwitch />
            </Box>
          </>
        )}
        <Grid gridColumn={{ x: '3/1', s: 'auto' }}>
          <FormSearch res={res} callBack={callBack} />
        </Grid>
        <Box display={{ x: 'none', s: 'flex' }} style={{ justifyContent: 'flex-end' }}>
          <StyleSwitch />
        </Box>
      </Grid>
    </Col>
  );
}
