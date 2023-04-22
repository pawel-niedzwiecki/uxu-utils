import React from 'react';
import { useBreakpoints } from './../../../hooks';
import { ComponentType } from './component.header.types';
import { HeaderFull, HeaderShort } from './components';

export const Header: ComponentType = ({ tabs, callBack, res, alert, ...args }, props) => {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <HeaderShort isMobile={isMobile} tabs={tabs} callBack={callBack} res={res} />
      <HeaderFull isMobile={isMobile} tabs={tabs} alert={alert} callBack={callBack} res={res} />
    </>
  );
};
