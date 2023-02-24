import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useMode} from "./../../../../hooks"
import {InputSwitch} from './../../../../components';
import type {Props} from './component.styleSwitch.types';


import {Form} from './component.styleSwitch.style';

export const StyleSwitch: Props = ({callBack, res, ...args}, props) => {
  const {mode, setMode} = useMode()
  const {register, watch, setValue} = useForm();
  const themeSwitch = watch('switchStyle');


  useEffect(() => {
    if (mode === 'dark') setValue("switchStyle", true)
    else if (mode === 'light') setValue("switchStyle", false);
  }, [mode]);

  useEffect(() => {
    if (themeSwitch) setMode('dark')
    else setMode('light')
  }, [themeSwitch])


  return (
    <Form {...props} {...args}>
      <InputSwitch {...register('switchStyle')} defaultChecked={mode === 'dark' ? true : false}/>
    </Form>
  );
};

