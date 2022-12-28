import { Props } from './component.flex.container.props';
import { Wrapper } from './component.flex.container.style';


export const Container: Props = ({ children, full = false, ...args }, props) => (
  <Wrapper full={full} {...props} {...args}>
    {children}
  </Wrapper>
);
