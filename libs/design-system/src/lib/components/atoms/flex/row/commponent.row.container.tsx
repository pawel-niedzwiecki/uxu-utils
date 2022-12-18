import { Wrapper } from './commponent.row.container.style';
import { Props } from './commponent.flex.row.props';

export const Row: Props = ({ children, ...args }, props) => <Wrapper {...props} {...args}>{children}</Wrapper>;
