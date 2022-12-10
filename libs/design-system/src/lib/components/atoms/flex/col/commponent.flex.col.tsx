import {ColStyle} from './commponent.flex.col.style';
import type {Props} from './props'

export const Col: Props = ({children, ...args}, props) => <ColStyle {...props} {...args} cols={args}>{children}</ColStyle>
