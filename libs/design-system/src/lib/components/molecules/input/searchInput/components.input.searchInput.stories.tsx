import * as React from 'react';
import {SearchInput} from './components.input.searchInput';
import {Box} from 'components/atoms/box'
import {Container, Row, Col} from "components/atoms/flex";

type Args = typeof args;

const args = {
  borderRadius: 'default'
} as const;

export default {
  title: 'Components /Input',
  component: SearchInput,
  argTypes: {
    borderRadius: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
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
          Box system
        </Box>
        <Box
          paddingTop="big"
          width="100%"
          color="primary.accent4"
          paddingBottom='big'
          textAlign='center'
        >
          This box system generate div with all props for styles
        </Box>
      </Col>
      <Col xs={12} style={{display: 'flex'}}>
       <SearchInput/>
      </Col>
    </Row>
  </Container>

);

export const Search = Template.bind({});

// @ts-ignore
Search.args = args;
