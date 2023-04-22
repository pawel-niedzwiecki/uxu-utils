import { ComponentRefWithProps } from './../../../../utils';
import { RegisterOptions } from 'react-hook-form';

export type OtherProps = {
  error?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

export type ComponentType = ComponentRefWithProps<OtherProps & RegisterOptions>;
