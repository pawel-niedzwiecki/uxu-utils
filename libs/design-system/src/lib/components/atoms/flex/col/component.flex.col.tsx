import {Wrapper} from './component.flex.col.style';
import type {Props} from './component.flex.col.props'


export const Col: Props = ({children, ...args}, props) => <Wrapper {...props} {...args} cols={args}>{children}</Wrapper>


