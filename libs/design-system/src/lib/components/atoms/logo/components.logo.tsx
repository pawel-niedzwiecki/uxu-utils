import {vectorLogos} from 'assets';
import {Props} from './commponent.logo.props';
import {Wrapper} from "./commponent.logo.style";


export const Logo: Props = ({type, ...args}, props) => (
  <Wrapper {...args} {...props}>{vectorLogos[type] ? vectorLogos[type] : "the type not exist"}</Wrapper>
)
