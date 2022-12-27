import { Props } from './component.flex.row.props';
import { Wrapper } from './component.row.container.style';


export const Row: Props = ({ children, ...args }, props) => <Wrapper {...props} {...args}>{children}</Wrapper>;
