import React, {useEffect, useState, FormEvent} from 'react';
import {Search} from 'react-feather';
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {Button, Input} from "components/atoms";
import type {Props} from './components.search.types';
import {stateResult} from './components.search.states';

import {
  Form,
  Sugestions,
  Sugestion,
  Cover,
  Img,
  Content,
  Header,
  Excerpt,
} from './components.search.style'

export const SearchInput: Props = ({callBack, res, ...args}, props) => {
  const router = useRouter();
  const {register, watch} = useForm();
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
    if (!focus) setTimeout(() => setResult([]), 200)
    else if (search === res?.query && res?.data) setResult(res.data)
    else setResult([]);
  }, [search, focus, res])

  const sug = (): JSX.Element | void => {
    if (result?.length) return (
      <Sugestions>
        {result?.map((item, i) => (
          <Sugestion key={i} href={item.slug} title={item.title}>
            <Cover>{item?.cover ? <Img style={{backgroundImage: `url(${item.cover})`}}/> :
              <Search size={16} color="var(--uxu-color-primary-foreground)"/>}</Cover>
            <Content>
              <Header>{item.title}</Header>
              {item.excerpt ? <Excerpt>{item.excerpt}</Excerpt> : ""}
            </Content>
          </Sugestion>
        ))}
      </Sugestions>
    )
  }

  return (
    <Form {...props} {...args} onSubmit={(e: FormEvent<HTMLFormElement>): void => mySubmit(e)}>
      <Input {...register('search')} type="search" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
        <Button variant="ghost"><Search size={16}/></Button>
      </Input>
      {sug()}
    </Form>
  )
}

