import {Text as T} from './index';
import {Box} from 'components/atoms/box'
import {Container, Row, Col} from "components/atoms/flex";
import * as React from 'react';

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
      control: {type: 'select'}
    },
    text: {label: {control: 'text'}},
  },
};


const Template = (args: Args) => {
  const listTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'i', 'b', 'strong'];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Box
            fontSize="fs1"
            paddingTop="big"
            fontWeight="bold"
            width="100%"
            color="primary.foreground"
            textAlign='center'
          >
            Text system
          </Box>
          <Box
            width="100%"
            textAlign='center'
            paddingTop="big"
            paddingBottom='big'
            color="primary.accent4"
          >
            System TXT is used in UXU products.
          </Box>
        </Col>
        {listTags.map((tag, i) => (
          <Col xs={12} key={i}>
            <Box
              width="100%"
              padding="default"
              marginBottom="default"
              borderRadius="default"
              backgroundColor="success.default"
              style={{justifyContent: 'center', display: 'flex'}}
            >
              <T color={args.color} type={tag}>{tag}: {args.text}</T>
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  )
}


export const Text = Template.bind({});
// @ts-ignore
Text.args = args;
