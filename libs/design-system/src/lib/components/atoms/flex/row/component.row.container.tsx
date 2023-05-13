import { ComponentRowWithProps } from './component.flex.row.types';
import { Wrapper } from './component.row.container.style';


export const Row: ComponentRowWithProps = ({ children, ...args }, props) => <Wrapper {...props} {...args}>{children}</Wrapper>;
