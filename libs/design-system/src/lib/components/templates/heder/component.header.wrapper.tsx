import React from 'react';
import { useBreakpoints } from './../../../hooks';
import { ComponentType } from './component.header.types';
import { HeaderFull, HeaderShort } from './components';

export const Header: ComponentType = ({ tabs, callBack, res, alert, ...args }, props) => {
  const { isTabletOrMobile } = useBreakpoints();

  return (
    <>
      {!isTabletOrMobile && <HeaderShort isMobile={isTabletOrMobile} tabs={tabs} callBack={callBack} res={res} />}
      <HeaderFull isMobile={isTabletOrMobile} tabs={tabs} alert={alert} callBack={callBack} res={res} />
    </>
  );
};
