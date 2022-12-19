import {Wrapper} from "./commponent.loading.wheel.style";
import {Props} from './commponent.loading.wheel.props';

export const LoadingWheel: Props = ({...args}, props) => (
  <Wrapper {...args} {...props} >
    {new Array(12).fill(undefined).map((item, i) => <span></span>)}
  </Wrapper>
)
