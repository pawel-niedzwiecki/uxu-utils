import {ColStyle} from './commponent.flex.col.style';
import type {CommponentFlexColProps} from './commponent.flex.col.props'


export const Col: CommponentFlexColProps = ({children, ...args}, props) => <ColStyle {...props} {...args} cols={args}>{children}</ColStyle>
