import {LoadingWheel} from "./../../../components";
import {Props} from './component.button.props';
import {Wrapper} from "./component.button.style";


export const Button: Props = ({children, variant, prefix, suffix, ...args}, props) => {
  const content = variant === 'loading' ? <><LoadingWheel size={2} style={{marginRight: "0.75rem"}}/> Loading</> : <>{prefix}{children}{suffix}</>
  return <Wrapper {...args} {...props} variant={variant}>{content}</Wrapper>
}
