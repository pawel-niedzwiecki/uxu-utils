
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMode } from './../../../../hooks';
import { InputSwitch } from './../../../../components';
import type { Props } from './component.styleSwitch.types';


import { Form } from './component.styleSwitch.style';

export const StyleSwitch: Props = ({ callBack, res, ...args }, props) => {
  const { mode, setMode } = useMode();
  const { register, watch, setValue } = useForm();
  const themeSwitch = watch('switchStyle');

  const setTheme = useCallback((): void => {
    if (themeSwitch) setMode('dark');
    else setMode('light');
  }, [themeSwitch]);


  useEffect(() => {
    if(mode === 'dark') setValue('switchStyle' , false)
    else setValue('switchStyle' , true)
  }, [mode])


  return (
    <Form {...props} {...args}>
      <InputSwitch
        {...register('switchStyle')}
        onClick={() => setTheme()} />
    </Form>
  );
};

