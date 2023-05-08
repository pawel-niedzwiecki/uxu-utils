import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Wrapper = styled(ReactMarkdown)`
  ${({ theme: { spaces, fontSizes } }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-bottom: ${spaces.large};
    }

    p,
    q,
    .img,
    .lead {
      display: block;
      position: relative;
      margin-bottom: ${spaces.default};
    }

    p,
    q {
      width: 100%;
      position: relative;
    }

    ul,
    ol {
      padding: 0;
      counter-reset: item;
      list-style-type: none;
      margin: 0 0 ${spaces.default};

      li {
        counter-increment: item;
        padding-left: ${spaces.default};
        margin-bottom: ${spaces.default};

        &:before {
          content: counter(item) '.';
          font-weight: bold;
          font-size: ${fontSizes.h4};
        }
      }
    }
  `}
`;
