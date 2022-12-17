import {Wrapper} from './commponent.flex.col.style';
import type {Props} from './commponent.flex.col.props'


export const Col: Props = ({children, ...args}, props) => <Wrapper {...props} {...args} cols={args}>{children}</Wrapper>


