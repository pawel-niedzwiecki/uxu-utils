import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  display: block;
  -webkit-appearance: none;
  padding: var(--uxu-space-default);
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);
  color: var(--uxu-color-primary-foreground);
  background: var(--uxu-color-primary-background);
  transition: border-color var(--uxu-motion-default);

  &::placeholder {
    opacity: 1;
    color: var(--uxu-color-primary-accent3);
    transition: opacity var(--uxu-motion-default);
  }

  &:focus {
    outline: none;
    border: var(--uxu-border-active);

    &::placeholder {
      opacity: 0;
    }
  }
`;

export const Sugestions = styled.ul`
  width: 100%;
  display: block;
  list-style: none;
  padding: var(--uxu-space-small) 0;
  margin-top: var(--uxu-space-small);
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);
`

export const Sugestion = styled.li`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: var(--uxu-space-small) var(--uxu-space-default);

  &:hover {
    background: var(--uxu-color-primary-accent1);
  }
`

export const ImageBox = styled.div`
  display: flex;
  width: 4.2rem;
  height: 4.2rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--uxu-radii-default);
  background: var(--uxu-color-primary-accent1);

`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--uxu-space-small);
`;

export const Header = styled.strong`
  width: 100%;
`;

export const Excerpt = styled.p`
  font-size: var(--uxu-font-size-fs7);
  color: var(--uxu-color-primary-accent3);
`
