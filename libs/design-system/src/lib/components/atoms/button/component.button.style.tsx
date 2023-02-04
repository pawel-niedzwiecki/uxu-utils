import styled, { css } from 'styled-components';
import { SpecialProps } from './component.button.props';
import { listensPropsSize } from './../../../utils';

export const btn = ({size, shape, align, color, variant}: SpecialProps) => {
  const ghost = variant === 'ghost';
  const shadow = variant === 'shadow';

  const style = {
    display: 'flex',

    maxWidth: '100%',
    cursor: 'pointer',

    border: `1px solid`,
    borderRadius: `${shape === 'circle' ? '100%' : 'var(--uxu-radii-default)'}`,

    fontWeight: 'var(--uxu-font-weight-regular)',
    lineHeight: 'var(--uxu-line-height-small)',
    fontSize: `var(--uxu-font-size-${size ? size : 'default'})`,
    padding: `${shape === 'circle' ? 'var(--uxu-space-default)' : `var(--uxu-space-small) var(--uxu-space-default)`}`,

    svg:{
      height: `var(--uxu-font-size-${size ? size : 'default'})`
    },
    transitionProperty: `all`,
    transitionTimingFunction: `ease`,
    transitionDuration: `var(--uxu-motions-default)`,

    '&:focus': {outline: 'none'},
  }

  switch (align) {
    case 'start':
    case 'end':
      Object.assign(style, {
        alignItems: 'center',
        justifyContent: align,
      });
      break;
    case 'grow':
      Object.assign(style, {
        alignItems: 'center',
        justifyContent: 'space-between',
      });
      break;
    default:
      Object.assign(style, {
        alignItems: 'center',
        justifyContent: 'center',
      });
      break;
  }

  if (variant !== "disabled" && variant !== "loading") switch (color) {
    case undefined:
      Object.assign(style, {
        color: `var(--uxu-color-primary-foreground)`,
        background: `transparent`,
        borderColor: `transparent`,

        '&:hover': {
          color: `var(--uxu-color-primary-accent5)`,
          background: `transparent`,
          borderColor: `transparent`,
        }
      });
      break;
    case 'secondary':
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-primary-accent5)` : `var(--uxu-color-primary-background)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-accent5)`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-accent5)`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-accent5)`,
          background: ghost ? `rgba(var(--uxu-color-primary-accent5-rgba), var(--uxu-alpha-small))` : shadow ? `var(--uxu-color-primary-accent5)` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-accent1)` : `var(--uxu-color-primary-accent5)`,
        }
      });
      break;
    case 'success':
    case 'error':
    case 'warning':
    case 'violet':
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-${color}-default)` : `var(--uxu-color-primary-foreground)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-foreground)` : `var(--uxu-color-${color}-default)`,
          background: ghost ? `rgba(var(--uxu-color-${color}-default-rgba), var(--uxu-alpha-small))` : shadow ? `var(--uxu-color-${color}-default)` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,
        }
      });
      break;
    case `cyan`:
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-${color}-default)` : `var(--uxu-color-primary-background)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,
          background: ghost ? `rgba(var(--uxu-color-${color}-default-rgba), var(--uxu-alpha-small))` : shadow ? `var(--uxu-color-${color}-default)` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-${color}-default)`,
        }
      });
      break;
    case `purple`:
    case `magenta`:
    case `pink`:
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-highlight-${color})` : `var(--uxu-color-primary-foreground)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-foreground)` : `var(--uxu-color-highlight-${color})`,
          background: ghost ? `rgba(var(--uxu-color-highlight-${color}-rgba), var(--uxu-alpha-small))` : shadow ? `var(--uxu-color-highlight-${color})` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,
        }
      });
      break;
    case `yellow`:
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-highlight-${color})` : `var(--uxu-color-primary-background)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,
          background: ghost ? `rgba(var(--uxu-color-highlight-${color}-rgba), var(--uxu-alpha-small))` : shadow ? `var(--uxu-color-highlight-${color})` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-highlight-${color})`,
        }
      });
      break;
    default:
      Object.assign(style, {
        color: ghost || shadow ? `var(--uxu-color-primary-foreground)` : `var(--uxu-color-primary-background)`,
        background: ghost || shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-foreground)`,
        borderColor: ghost ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-foreground)`,

        '&:hover': {
          color: shadow ? `var(--uxu-color-primary-background)` : `var(--uxu-color-primary-foreground)`,
          background: ghost ? `var(--uxu-color-primary-accent1)` : shadow ? `var(--uxu-color-primary-foreground)` : `var(--uxu-color-primary-background)`,
          borderColor: ghost ? `var(--uxu-color-primary-accent1)` : `var(--uxu-color-primary-foreground)`,
        }
      });
      break;
  }

  if (variant) switch (variant) {
    case 'loading':
    case 'disabled':
      Object.assign(style, {
        cursor: `not-allowed`,
        color: `var(--uxu-color-primary-accent3)`,
        background: `var(--uxu-color-primary-accent1)`,
        borderColor: `var(--uxu-color-default)`,

        '&:hover': {
          color: `var(--uxu-color-primary-accent3)`,
          background: `var(--uxu-color-primary-accent1)`,
          borderColor: `var(--uxu-color-default)`,
        }

      });
      break;
  }

  return style
}

export const Wrapper = styled.button<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    ${listensPropsSize};
    ${btn({size, shape, align, color, variant})};
  `}
`
