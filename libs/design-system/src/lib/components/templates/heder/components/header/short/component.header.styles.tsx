import styled from 'styled-components';

export const WrapperHeaderShort = styled.header`
  left: 0;
  top: -45px;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 999999;
  backdrop-filter: blur(1rem);
  transition: all 0.4s ease 0s;
  border-bottom: var(--uxu-border-default);
  background-color: rgba(var(--uxu-color-primary-background-rgba), 0.5);
`;
