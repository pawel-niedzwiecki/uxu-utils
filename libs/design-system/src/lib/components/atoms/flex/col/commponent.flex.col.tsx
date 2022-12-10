import {ColStyle} from './commponent.flex.col.style';
import type {Props} from './commponent.flex.col.props'

export const Col: Props = ({children, ...args}, props) => <ColStyle {...props} {...args} cols={args}>{children}</ColStyle>
