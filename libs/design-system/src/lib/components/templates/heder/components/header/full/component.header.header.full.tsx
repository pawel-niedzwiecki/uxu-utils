import { ChunkFooter, ChunkHeader } from './../../chunks';
import { Alert, Container, Row } from '../../../../../atoms';
import { WrapperHeaderFull } from './component.header.styles';
import { ComponentProps } from './component.header.header.full.types';

export function HeaderFull({ isMobile, res, callBack, tabs, alert }: ComponentProps) {
  return (
    <WrapperHeaderFull>
      {alert && <Alert {...alert} />}
      <Container>
        <Row>
          {ChunkHeader({ isMobile, res, callBack })}
          {ChunkFooter({ tabs })}
        </Row>
      </Container>
    </WrapperHeaderFull>
  );
}
