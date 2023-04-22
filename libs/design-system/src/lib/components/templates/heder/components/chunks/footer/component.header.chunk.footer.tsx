import { Col } from '../../../../../atoms';
import { Tabs } from '../../../../../organisms';
import type { ComponentProps } from './component.header.chunk.footer.types';

export function ChunkFooter({ tabs }: ComponentProps) {
  return (
    <Col xs={12}>
      <Tabs style={{ bottom: '-1px' }} tabs={tabs} />
    </Col>
  );
}
