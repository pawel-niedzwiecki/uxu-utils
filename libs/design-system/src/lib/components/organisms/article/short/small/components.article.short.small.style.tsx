import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme: { radiis, shadows } }) => css`
    display: flex;
    width: 100%;
    overflow: hidden;
    height: fit-content;
    position: relative;
    flex-direction: column;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
    background-color: var(--uxu-color-primary-background);

    html[data-theme="light"] & {
      box-shadow: ${shadows.default};
    }
  `}
`;


export const BoxImg = styled.div`
  ${({ theme: { motions, alphas } }) => css`
    width: 100%;
    height: 18rem;
    display: block;
    position: relative;


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
    padding: ${spaces.default};
    align-items: center;
    position: relative;
    border-top: var(--uxu-border-default);


    a {
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      font-size: ${fontSizes.default};
      overflow: hidden;
      white-space: unset;
      text-overflow: ellipsis;
    }

    @media all and (min-width: ${breakpoints.s}px) {
      a {
        font-size: ${fontSizes.h4};
      }
    }

  `}
`;
