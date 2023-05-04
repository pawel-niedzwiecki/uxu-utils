import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme: { radiis, shadows } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
    background-color: var(--uxu-color-primary-accent1);

    html[data-theme='light'] & {
      box-shadow: ${shadows.default};
    }
  `}
`;

export const BoxContent = styled.div`
  ${({ theme: { spaces, breakpoints, fontSizes } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: ${spaces.default};

    @media all and (min-width: ${breakpoints.s}px) {
      .lead {
        font-size: ${fontSizes.h4};
        padding-bottom: ${spaces.default};
      }
    }

    @media all and (min-width: ${breakpoints.l}px) {
      width: calc(100% - 28rem);
    }

    q {
      width: 100%;
      max-width: 600px;
      display: flex;
      position: relative;
      align-items: center;
      border-radius: 0.6rem;
      justify-content: center;
      padding: ${spaces.large};
      margin: ${spaces.default} auto;
      border: var(--uxu-border-default);
      background-color: var(--uxu-color-body-background);

      &::before,
      &::after {
        line-height: 0;
        font-size: 6rem;
        font-weight: bold;
        position: absolute;
      }

      &::before {
        bottom: 4rem;
        content: ',,';
        left: ${spaces.small};
      }

      &::after {
        top: 3rem;
        content: '"';
        right: ${spaces.small};
      }
    }
  `}
`;

export const BoxAds = styled.div`
  ${({ theme: { spaces } }) => css`
    width: 25rem;
    position: relative;
    margin: ${spaces.default};
  `}
`;

export const Header = styled.h1`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    padding-bottom: ${spaces.large};
  `}
`;

export const BoxImgData = styled.div`
  ${({ theme: { fontSizes, spaces } }) => css`
    width: 100%;
    height: auto;
    position: relative;
    margin: 0 ${spaces.default};

    span {
      padding: ${spaces.small} 0;
      font-size: ${fontSizes.small};
      color: var(--uxu-color-primary-accent5);
    }
  `}
`;

export const BoxImg = styled.div`
  ${({ theme: { motions, alphas, breakpoints, radiis, spaces } }) => css`
    width: 100%;
    height: 18rem;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: ${radiis.default};

    @media all and (min-width: ${breakpoints.s}px) {
      height: 50rem;
    }
  `}
`;

export const BoxAuthor = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const BoxAuthorData = styled.div`
  ${({ theme: { spaces, fontSizes } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${spaces.default};

    span {
      width: 100%;
      display: block;

      &:first-of-type {
        font-weight: bold;
        margin-bottom: ${spaces.small};
      }

      &:last-of-type {
        font-size: ${fontSizes.small};
        color: var(--uxu-color-primary-accent5);
      }
    }
  `}
`;

export const Tags = styled.ul`
  ${({ theme: { spaces } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: ${spaces.default};
  `}
`;

export const Tag = styled.li`
  ${({ theme: { spaces } }) => css`
    a {
      padding: ${spaces.default};

      &:first-of-type {
        padding-left: 0;
      }

      &:before {
        content: '#';
        color: var(--uxu-color-primary-accent5);
      }
    }
  `}
`;

export const BoxText = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 ${spaces.default} calc(4.2rem + ${spaces.default});
  `}
`;
