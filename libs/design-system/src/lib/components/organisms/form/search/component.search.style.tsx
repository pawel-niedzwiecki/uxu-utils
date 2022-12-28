import styled from 'styled-components';
import { Link } from 'components';


export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  label {
    button {
      top: 0.6rem;
      right: 0.6rem;
      position: absolute;
    }
  }
`;

export const Sugestions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--uxu-space-small) 0;
  margin-top: var(--uxu-space-small);
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);

  a {
    width: 100%;
    display: flex;
    cursor: pointer;
    padding: var(--uxu-space-small) var(--uxu-space-default);

    &:hover {
      opacity: 1;
      background: var(--uxu-color-primary-accent1);
    }
  }
`;

export const Sugestion = styled(Link)``;

export const Cover = styled.div`
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--uxu-radii-default);
  background: var(--uxu-color-primary-accent1);

`;

export const Img = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--uxu-radii-default);
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
`;
