import React, {useEffect, useState} from 'react';
import {Search} from 'react-feather';
import {useForm} from "react-hook-form";
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
  const [result, setResult] = useState(stateResult);
  const [focus, setFocus] = useState(false);
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const search = watch('search')

  useEffect(() => {
    if (!focus) setTimeout(() => setResult([]), 100)
    else if (search === res?.query && res?.data) setResult(res.data)
    else setResult([]);
  }, [search, focus, res])

  const sug = (): JSX.Element | void => {
    if (result?.length) return (
      <Sugestions>
        {result?.map((item, i) => (
          <Sugestion key={i} >
            <Cover>{item?.cover ? <Img style={{backgroundImage: `url(${item.cover})`}}/> : <Search size={16} color="var(--uxu-color-primary-foreground)"/>}</Cover>
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
    <Form {...props} {...args}>
      <Input {...register('search')} type="search" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
        <Button variant="ghost"><Search size={16}/></Button>
      </Input>
      {sug()}
    </Form>
  )
}

