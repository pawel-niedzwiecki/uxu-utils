import {Wrapper} from "./commponent.button.style";
import {Props} from './commponent.button.props';


export const Button: Props = ({children, prefix, suffix, ...args}, props) => (
  <Wrapper {...args} {...props}>{prefix}{children}{suffix}</Wrapper>
)
