import styled, { css } from 'styled-components';

export const List = styled.ul`
  z-index: 0;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  list-style: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }


  &:after {
    content: "";
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    position: absolute;
    border-bottom: var(--uxu-border-default);
  }
`;

export const Item = styled.li`
  ${({ theme: { spaces } }) => css`

    width: max-content;

    border-bottom: var(--uxu-border-transparent);

    a {
      display: flex;
      padding: 0.6rem 1.5rem;
      align-items: center;

      span {
        padding-left: 0.6rem;
      }
    }

    &.active, &:hover {
      z-index: 1;
      border-bottom: var(--uxu-border-primary-foreground);
    }

  `}
`;
