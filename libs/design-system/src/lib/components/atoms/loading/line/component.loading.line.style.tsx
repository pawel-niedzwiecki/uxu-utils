import styled from 'styled-components';
import { listensPropsBorder, listensPropsSize } from './../../../../utils';

export const Item = styled.div`
  width: 100%;
  height: 1.6rem;
  ${listensPropsSize};
  ${listensPropsBorder};
  overflow: hidden;
  position: relative;
  display: inline-block;
  background-color: var(--uxu-color-primary-accent2);

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadArticleText 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, var(--uxu-color-primary-accent1) 60%, transparent 100%);
  }

  @keyframes loadArticleText {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;
