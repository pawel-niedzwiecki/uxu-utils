import styled from 'styled-components';
import {
  listensPropsBorder,
  listensPropsColor,
  listensPropsDisplay,
  listensPropsPosition,
  listensPropsShadow,
  listensPropsSize,
  listensPropsSpace,
  listensPropsTypography,
} from './../../../utils';

export const ComponentBox = styled.div`
  ${listensPropsColor};
  ${listensPropsSpace};
  ${listensPropsPosition};
  ${listensPropsShadow};
  ${listensPropsSize};
  ${listensPropsTypography};
  ${listensPropsBorder};
  ${listensPropsDisplay};
`;
