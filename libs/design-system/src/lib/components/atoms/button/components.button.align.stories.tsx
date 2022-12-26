import * as React from 'react';
import {Button} from './index';
import {ArrowUp} from "react-feather";
import {Box} from 'components/atoms/box'
import {Text} from "components/atoms/text";
import {Container, Row, Col} from "components/atoms/flex";
import {SectionStoryBook} from "components/templates/section";


type Args = typeof args;

const args = {
  width: '100%',
  style: {margin: '0.75rem'}
} as const;


export default {
  title: 'Components /Button',
  component: Button,
};


const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'violet', 'cyan', 'purple', 'magenta', 'pink', 'yellow'];
const headerBoxStyle = {
  width: "100%",
  display: "flex",
  border: "default",
  padding: "default",
  borderRadius: "default",
  style: {justifyContent: 'space-between', flexWrap: "wrap", alignItems: 'center'}
}
const headerStyle = {
  type: "h3",
  paddingLeft: "default",
  paddingBottom: "default",
  paddingTop: "large"
}

const Template = (args: Args) => (
  <SectionStoryBook
    title="Button Aligns"
    description="This component is used in all products UXU. In this story you can look, how looks in all aligns button">
    <Container>
      <Row>
        {/* PRIMARY START */}
        <Col xs={12}>
          <Text {...headerStyle}>Alignments</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            <Button {...args} prefix={<ArrowUp/>} align="start">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} align="end">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} align="grow">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} align="center">Upload</Button>

            <Button {...args} prefix={<ArrowUp/>} suffix={<ArrowUp/>} align="start">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} suffix={<ArrowUp/>} align="end">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} suffix={<ArrowUp/>} align="grow">Upload</Button>
            <Button {...args} prefix={<ArrowUp/>} suffix={<ArrowUp/>} align="center">Upload</Button>
          </Box>
        </Col>
        {/* PRIMARY END */}

      </Row>
    </Container>
  </SectionStoryBook>
)

export const Aligns = Template.bind({});
// @ts-ignore
Aligns.args = args;
