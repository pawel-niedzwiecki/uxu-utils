import {Wrapper} from "./commponent.button.style";
import {Props} from './commponent.button.props';
import {LoadingWheel} from "components/atoms/loading";


export const Button: Props = ({children, variant, prefix, suffix, ...args}, props) => {
  const content = variant === 'loading' ? <><LoadingWheel size={2} style={{marginRight: "0.75rem"}}/> Loading</> : <>{prefix}{children}{suffix}</>
  return <Wrapper {...args} {...props} variant={variant}>{content}</Wrapper>
}