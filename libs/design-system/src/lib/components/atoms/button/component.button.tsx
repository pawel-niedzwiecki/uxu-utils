import { LoadingWheel } from './../../../components';
import { ComponentButtonType } from './component.button.types';
import { Wrapper } from './component.button.styles';

export const Button: ComponentButtonType = ({ children, variant, prefix, suffix, ...args }, porps) => {
  const content =
    variant === 'loading' ? (
      <>
        <LoadingWheel size={2} style={{ marginRight: '0.75rem' }} /> Loading
      </>
    ) : (
      <>
        {prefix}
        {children}
        {suffix}
      </>
    );
  return (
    <Wrapper {...args} {...porps} variant={variant}>
      {content}
    </Wrapper>
  );
};
