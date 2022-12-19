import {Wrapper} from "./commponent.loading.dots.style";
import {Props} from './commponent.loading.dots.props';

export const LoadingDots: Props = ({...args}, props) => (
  <Wrapper {...args} {...props} >
    <span></span>
    <span></span>
    <span></span>
  </Wrapper>
)
