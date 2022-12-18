import {Props} from "./commponent.flex.container.props";
import {Wrapper} from './commponent.flex.container.style';


export const Container: Props = ({children, full = false, ...args}, props) => (
  <Wrapper full={full} {...props} {...args}>
    {children}
  </Wrapper>
);
