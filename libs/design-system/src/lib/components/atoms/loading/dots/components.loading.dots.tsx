import {Props} from './commponent.loading.dots.props';
import {Wrapper} from "./commponent.loading.dots.style";

export const LoadingDots: Props = ({...args}, props) => (
  <Wrapper {...args} {...props} >
    <span></span>
    <span></span>
    <span></span>
  </Wrapper>
)
