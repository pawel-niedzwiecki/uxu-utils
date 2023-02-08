import * as React from 'react';
import {Box, Col, Text as T, SectionStoryBook} from './../../../components';


type Args = typeof args;

const args = {
  color: 'primary.foreground',
  text: 'your text',
} as const;

export default {
  title: 'Styleguide /Text',
  component: T,
  argTypes: {
    color: {
      options: ['primary.foreground', 'primary.background', 'error.default', 'success.default', 'warning.default', 'violet.default', 'cyan.default', 'highlight.yellow', 'highlight.pink'],
      control: {type: 'select'},
    },
    text: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => {
  const listTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'i', 'b', 'strong'];

  return (
    <SectionStoryBook title="Text system" description="System TXT is used in UXU products.">
      {listTags.map((tag, i) => (
        <Col xs={12} key={i}>
          <Box
            width='100%'
            padding='default'
            marginBottom='default'
            borderRadius='default'
            backgroundColor='success.default'
            style={{justifyContent: 'center', display: 'flex'}}
          >
            <T color={args.color} type={tag}>{tag}: {args.text}</T>
          </Box>
        </Col>
      ))}
    </SectionStoryBook>
  );
};


export const Text = Template.bind({});
// @ts-ignore
Text.args = args;
