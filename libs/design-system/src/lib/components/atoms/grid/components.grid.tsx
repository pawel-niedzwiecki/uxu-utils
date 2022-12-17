import {Props} from './commponent.grid.props';
import {Wrapper} from './commponent.grid.style';

export const Grid: Props = ({children, ...args}, props) => <Wrapper {...args} {...props}>{children}</Wrapper>;
