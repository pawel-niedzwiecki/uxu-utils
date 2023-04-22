import styled from 'styled-components';
import { listensPropsSize, listensPropsSpace, listensPropsVector } from './../../../utils';

export const Wrapper = styled.div`
  ${listensPropsSize};
  ${listensPropsSpace};

  svg {
    display: block;
    ${listensPropsSize};

    path {
      ${listensPropsVector}
    }
  }
`;
