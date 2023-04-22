import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  label {
    button {
      top: 0.3rem;
      right: 0rem;
      position: absolute;
    }
  }
`;

export const Sugestions = styled.div`
  top: 30px;
  width: 100%;
  max-width: 100%;
  z-index: 999;
  display: flex;
  position: absolute;
  flex-direction: column;
  backdrop-filter: blur(3rem);
  padding: var(--uxu-space-small) 0;
  margin-top: var(--uxu-space-small);
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);
  background: var(--uxu-color-primary-background);

  .sugestion {
    width: 100%;
    max-width: 100%;
    display: flex;
    cursor: pointer;
    padding: var(--uxu-space-small) var(--uxu-space-default);

    &:hover {
      opacity: 1;
      background: var(--uxu-color-primary-accent1);
    }
  }
`;

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
  width: calc(100% - 3.2rem);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--uxu-space-small);
`;

export const Header = styled.strong`
  width: 100%;
  max-width: 100%;
`;

export const Excerpt = styled.p`
  width: 100%;
  max-width: 95%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: var(--uxu-font-size-fs7);
  color: var(--uxu-color-primary-accent3);
`;
