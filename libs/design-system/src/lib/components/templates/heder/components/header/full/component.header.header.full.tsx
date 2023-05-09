import { ChunkFooter, ChunkHeader } from './../../chunks';
import {  Container, Row } from '../../../../../atoms';
import { WrapperHeaderFull } from './component.header.styles';
import { ComponentProps } from './component.header.header.full.types';

export function HeaderFull({ isMobile, res, callBack, tabs, ComponentAaboveHeader }: ComponentProps) {
  return (
    <WrapperHeaderFull>
      {ComponentAaboveHeader && ComponentAaboveHeader}
      <Container>
        <Row>
          {ChunkHeader({ isMobile, res, callBack })}
          {ChunkFooter({ tabs })}
        </Row>
      </Container>
    </WrapperHeaderFull>
  );
}
