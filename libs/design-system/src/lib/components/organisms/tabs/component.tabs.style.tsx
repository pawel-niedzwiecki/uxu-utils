import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  list-style: none;
  position: relative;

  z-index: 0;

  &::-webkit-scrollbar{
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
  width: max-content;
  border-bottom: var(--uxu-border-transparent);

  &.active, &:hover{
    z-index: 1;
    border-bottom: var(--uxu-border-primary-foreground);
  }
`;
