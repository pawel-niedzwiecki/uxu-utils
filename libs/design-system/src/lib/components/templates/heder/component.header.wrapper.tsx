import React from 'react';
import { useBreakpoints } from './../../../hooks';
import {  ComponentType } from './component.header.types';
import { HeaderFull, HeaderShort } from './components';

export const Header: ComponentType = ({ tabs, callBack, res, ComponentAaboveHeader, ...args }, props) => {
  const { isTabletOrMobile } = useBreakpoints();

  return (
    <>
      <HeaderFull isMobile={isTabletOrMobile} tabs={tabs} callBack={callBack} res={res} ComponentAaboveHeader={ComponentAaboveHeader} />
      {!isTabletOrMobile && <HeaderShort isMobile={isTabletOrMobile} tabs={tabs} callBack={callBack} res={res} />}
    </>
  );
};
