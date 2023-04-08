import React from 'react';
import { Image } from 'react-feather';
import { Wrapper } from './component.dummyIMG.style';
import { Props } from './component.dummyIMG.props';

export const DummyIMG: Props = ({ ...args }, props) => {
  return <Wrapper {...args} {...props}><Image size='4rem' /></Wrapper>;
};
