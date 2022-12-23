import {Wrapper} from "./commponent.button.style";
import {Props} from './commponent.button.props';


export const Button: Props = ({children, type, ...args}, props) => (
  <Wrapper {...args} {...props}>{children}</Wrapper>
)
