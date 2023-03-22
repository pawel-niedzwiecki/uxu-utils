import React from 'react';
import { Image } from 'react-feather';
import { Wrapper } from './component.dummyIMG.style';
import { Props } from './component.dummyIMG.props';

export const DummyIMG: Props = ({ width = '100%', height = '100%' }) => {
  return <Wrapper width={width} height={height}><Image size='4rem' /></Wrapper>;
};
