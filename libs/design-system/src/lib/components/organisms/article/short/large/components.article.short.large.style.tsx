import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme: { radiis } }) => css`
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
  `}
`;


export const BoxImg = styled.div`
  ${({ theme: { motions, alphas, breakpoints } }) => css`
    width: 100%;
    height: 18rem;
    display: block;
    position: relative;

    @media all and (min-width: ${breakpoints.s}px) {
      height: 30rem;
    }


    a {
      opacity: 1;
      transition: opacity ${motions.default};

      &:hover {
        opacity: ${alphas.default};
      }
    }

  `}
`;

export const BoxContent = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: ${spaces.default};
    border-top: var(--uxu-border-default);
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
export const Header = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    font-weight: bold;
    max-height: calc(${fontSizes.h3} * 2 + 1.2rem * 2);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: unset;
    text-overflow: ellipsis;
    position: relative;
    font-size: ${fontSizes.large};
    margin: ${spaces.default} 0 ${spaces.default} calc(4.2rem + ${spaces.default});

    @media all and (min-width: ${breakpoints.s}px) {
      font-size: ${fontSizes.h3};
    }

  `}
`;
export const Tags = styled.ul`
  ${({ theme: { spaces } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 ${spaces.default} calc(4.2rem + ${spaces.default});
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
        content: "#";
        color: var(--uxu-color-primary-accent5);
      }
    }
  `}
`;
export const Footer = styled.div`
  ${({ theme: { spaces, breakpoints } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 0 0 calc(4.2rem + ${spaces.default});

    .link {
      margin-left: auto;
      margin-top: ${spaces.default};
    }

    @media all and (min-width: ${breakpoints.s}px) {
      flex-wrap: wrap;
      margin: 0 0 ${spaces.default} calc(4.2rem + ${spaces.default});

      .link {
        margin-left: auto;
        margin-top: auto;
      }
    }
  `}
`;

export const StatList = styled.ul`
  ${({ theme: { breakpoints } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;


    @media all and (min-width: ${breakpoints.s}px) {
      width: calc(100% - 10rem);
    }
  `}
`;

export const Stat = styled.li`
  ${({ theme: { spaces, breakpoints } }) => css`
    display: flex;
    align-items: center;
    margin-top: ${spaces.small};
    color: var(--uxu-color-primary-accent5);

    @media all and (min-width: ${breakpoints.s}px) {
      margin-top: auto;
    }

    span {
      display: flex;
      align-items: center;
      margin: 0 ${spaces.default} 0 ${spaces.small}
    }
  `}
`;
