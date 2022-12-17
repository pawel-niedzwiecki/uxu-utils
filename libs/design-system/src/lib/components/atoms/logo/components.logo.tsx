import {Wrapper} from "./commponent.logo.style";
import {Props} from './commponent.logo.props';
import {vectorLogos} from 'assets/vectors/assets.vector.logos'

export const Logo: Props = ({type, ...args}, props) => (
  <Wrapper {...args} {...props}>{vectorLogos[type] ? vectorLogos[type] : "the type not exist"}</Wrapper>
)
