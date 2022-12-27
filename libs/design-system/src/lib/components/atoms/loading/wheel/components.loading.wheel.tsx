import {Props} from './commponent.loading.wheel.props';
import {Wrapper, Wheel} from "./commponent.loading.wheel.style";

const el = new Array(12).fill(undefined)

export const LoadingWheel: Props = ({...args}, props) => (
  <Wrapper {...args} {...props}>
    <Wheel size={args.size} el={el}>
      {el.map((item, i) => <span></span>)}
    </Wheel>
  </Wrapper>
)
