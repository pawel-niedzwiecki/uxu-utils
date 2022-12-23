import styled, {css} from 'styled-components';
import {SpecialProps} from "./commponent.button.props"
import {listensPropsSize} from "@uxu/props-styled-system";

const btn = ({size, shape, align, color}: SpecialProps) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: '100%',
    cursor: 'pointer',

    border: `var(--uxu-border-primary-foreground)`,
    borderRadius: `${shape === 'circle' ? '100%' : 'var(--uxu-radii-default)'}`,

    fontWeight: 'var(--uxu-font-weight-regular)',
    lineHeight: 'var(--uxu-line-height-default)',
    fontSize: `var(--uxu-font-size-${size ? size : 'default'})`,
    padding: `${shape === 'circle' ? 'var(--uxu-space-default)' : `var(--uxu-space-small) var(--uxu-space-default)`}`,

    color: `var(--uxu-color-primary-background)`,
    background: `var(--uxu-color-primary-foreground)`,

    transitionTimingFunction: `ease`,
    transitionDuration: `var(--uxu-motions-default)`,
    transitionProperty: `border-color, background, color, transform, box-shadow`,

    '&:focus': {outline: 'none'},
    '&:hover': {
      color: `var(--uxu-color-primary-foreground)`,
      background: `var(--uxu-color-primary-background)`,
    }
  }


  if (align) switch (align) {
    case 'start':
    case 'end':
      Object.assign(style, {
        alignItems: align,
        justifyContent: align,
      });
      break;
    case 'grow':
      Object.assign(style, {
        alignItems: 'space-between',
        justifyContent: 'space-between',
      });
      break;
  }

  if (color) switch (color) {
    case 'secondary':
      Object.assign(style, {
        color: `var(--uxu-color-primary-accent5)`,
        background: `var(--uxu-color-primary-background)`,
        border: `var(--uxu-border-primary-secondary)`,

        '&:hover': {
          color: `var(--uxu-color-primary-foreground)`,
          background: `var(--uxu-color-primary-background)`,
          border: `var(--uxu-border-primary-foreground)`,
        }
      });
      break;
    case 'success':
    case 'error':
    case 'warning':
    case 'violet':
      Object.assign(style, {
        color: `var(--uxu-color-primary-foreground)`,
        background: `var(--uxu-color-${color}-default)`,
        border: `var(--uxu-border-${color}-default)`,

        '&:hover': {
          color: `var(--uxu-color-${color}-default)`,
          background: `var(--uxu-color-primary-background)`,
          border: `var(--uxu-border-${color}-default)`,
        }
      });
      break;
    case `cyan`:
      Object.assign(style, {
        color: `var(--uxu-color-primary-background)`,
        background: `var(--uxu-color-${color}-default)`,
        border: `var(--uxu-border-${color}-default)`,

        '&:hover': {
          color: `var(--uxu-color-${color}-default)`,
          background: `var(--uxu-color-primary-background)`,
          border: `var(--uxu-border-${color}-default)`,
        }
      });
      break;
    case `purple`:
    case `magenta`:
    case `pink`:
      Object.assign(style, {
        color: `var(--uxu-color-primary-foreground)`,
        background: `var(--uxu-color-highlight-${color})`,
        border: `var(--uxu-border-highlight-${color})`,

        '&:hover': {
          color: `var(--uxu-color-highlight-${color})`,
          background: `var(--uxu-color-primary-background)`,
          border: `var(--uxu-border-highlight-${color})`,
        }
      });
      break;
    case `yellow`:
      Object.assign(style, {
        color: `var(--uxu-color-primary-background)`,
        background: `var(--uxu-color-highlight-${color})`,
        border: `var(--uxu-border-highlight-${color})`,

        '&:hover': {
          color: `var(--uxu-color-highlight-${color})`,
          background: `var(--uxu-color-primary-background)`,
          border: `var(--uxu-border-highlight-${color})`,
        }
      });
      break;
  }

  return style
}

export const Wrapper = styled.button<SpecialProps>`
  ${({size, shape, align, color}) => css`
    ${listensPropsSize};
    ${btn({size, shape, align, color})};
  `}
`
