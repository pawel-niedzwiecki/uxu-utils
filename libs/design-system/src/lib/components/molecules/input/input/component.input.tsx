import type { Props } from './component.input.types';
import { InputComponent, LabelComponent } from './component.input.style';

export const Input = (props: any) => {
  // @ts-ignore
  const { className, children, style, ...otherProps } = props;
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...otherProps} />
      {children}
    </LabelComponent>
  );
};

