import { Props } from './commponent.flex.row.props';
import { Wrapper } from './commponent.row.container.style';


export const Row: Props = ({ children, ...args }, props) => <Wrapper {...props} {...args}>{children}</Wrapper>;
