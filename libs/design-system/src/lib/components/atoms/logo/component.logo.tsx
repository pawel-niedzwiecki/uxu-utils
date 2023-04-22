import { vectorLogos } from './../../../assets';
import { ComponentType } from './component.logo.types';
import { Wrapper } from './component.logo.style';

export const Logo: ComponentType = ({ type, ...args }, props) => {
  const logo = vectorLogos[type];
  return (
    <Wrapper {...args} {...props}>
      {logo}
    </Wrapper>
  );
};
