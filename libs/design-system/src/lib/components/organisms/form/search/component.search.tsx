// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { FormEvent, useEffect, useState } from 'react';
import { Search } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, Input } from './../../../../components';
import type { Props } from './component.search.types';
import { stateResult } from './component.search.states';

import { Content, Cover, Excerpt, Form, Header, Img, Sugestion, Sugestions } from './component.search.style';

export const FormSearch: Props = ({ callBack, res, ...args }, props) => {

  const router = useRouter();
  const { register, watch } = useForm();
  const [result, setResult] = useState(stateResult);
  const [focus, setFocus] = useState(false);

  const search = watch('search');

  const mySubmit: (event: FormEvent<HTMLFormElement>) => void = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFocus(false);
    router?.push(`/search/${search}`);
  };

  useEffect(() => {
    callBack && callBack(search);
    if (!focus) setTimeout(() => setResult([]), 200);
    else if (search === res?.query && res?.data) setResult(res.data);
    else setResult([]);
  }, [search, focus, res]);

  const sug = (): JSX.Element | void => {
    if (result?.length) return (
      <Sugestions>
        {result?.map((item, i) => (
          <Sugestion key={i} title={item.title}>
            <Cover>{item?.cover ? <Img style={{ backgroundImage: `url(${item.cover})` }} /> :
              <Search size={16} color='var(--uxu-color-primary-foreground)' />}</Cover>
            <Content>
              <Header>{item.title}</Header>
              {item.excerpt ? <Excerpt>{item.excerpt}</Excerpt> : ''}
            </Content>
          </Sugestion>
        ))}
      </Sugestions>
    );
  };

  return (
    <Form {...props} {...args} onSubmit={(e: FormEvent<HTMLFormElement>): void => mySubmit(e)}>
      <Input {...register('search')} type='search' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
        <Button variant='ghost'><Search size={16} /></Button>
      </Input>
      {sug()}
    </Form>
  );
};

