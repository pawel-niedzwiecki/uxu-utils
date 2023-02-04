import { vectorLogos } from './../../../assets';
import { Props } from './component.logo.props';
import { Wrapper } from './component.logo.style';


export const Logo: Props = ({ type, ...args }, props) => (
  <Wrapper {...args} {...props}>{vectorLogos[type] ? vectorLogos[type] : 'the type not exist'}</Wrapper>
);
