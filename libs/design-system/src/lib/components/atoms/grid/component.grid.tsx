import {Props} from './component.grid.props';
import {Wrapper} from './component.grid.style';


export const Grid: Props = ({children, ...args}, props) => <Wrapper {...args} {...props}>{children}</Wrapper>;
