import { Col } from '../../../../../atoms';
import { Tabs } from '../../../../../organisms';
import type { ComponentChunkFooterType } from './component.header.chunk.footer.types';

export const ChunkFooter: ComponentChunkFooterType = ({ tabs }) => {
  return (
    <Col xs={12}>
      <Tabs style={{ bottom: '-1px' }} tabs={tabs} />
    </Col>
  );
}
