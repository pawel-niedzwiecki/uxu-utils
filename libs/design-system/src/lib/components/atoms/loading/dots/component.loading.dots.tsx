import { Props } from './component.loading.dots.props';
import { Wrapper } from './component.loading.dots.style';

export const LoadingDots: Props = ({...args}, props) => (
  <Wrapper {...args} {...props} >
    <span></span>
    <span></span>
    <span></span>
  </Wrapper>
)
