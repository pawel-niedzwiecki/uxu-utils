import * as React from 'react';
import {Button} from './index';
import {Box} from 'components/atoms/box'
import {Text} from "components/atoms/text";
import {Container, Row, Col} from "components/atoms/flex";
import {SectionStoryBook} from "components/templates/section";


type Args = typeof args;

const args = {
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
  <SectionStoryBook title="Button variants"
                    description="This component is used in all products UXU. In this story you can look, how looks in all variants button">
    <Container>
      <Row>
        {/* PRIMARY START */}
        <Col xs={12}>
          <Text {...headerStyle}>Variant primary</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            {colors.map((color, i) => <Button {...args} color={color} index={i}>{color}</Button>)}
          </Box>
        </Col>
        {/* PRIMARY END */}

        {/* SHADOW START */}
        <Col xs={12}>
          <Text {...headerStyle}>Variant shadow</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            {colors.map((color, i) => <Button {...args} variant="shadow" color={color} index={i}>{color}</Button>)}
          </Box>
        </Col>
        {/* GHOST STOP */}

        {/* GHOST START */}
        <Col xs={12}>
          <Text {...headerStyle}>Variant ghost</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            {colors.map((color, i) => <Button {...args} variant="ghost" color={color} index={i}>{color}</Button>)}
          </Box>
        </Col>
        {/* GHOST STOP */}

        {/* LOADING START */}
        <Col xs={12}>
          <Text {...headerStyle}>Variant loading</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            <Button {...args} variant="loading" size="small">Loading</Button>
            <Button {...args} variant="loading" size="default">Loading</Button>
            <Button {...args} variant="loading" size="large">Loading</Button>
          </Box>
        </Col>
        {/* LOADING STOP */}

        {/* DISABLED START */}
        <Col xs={12}>
          <Text {...headerStyle}>Variant disabled</Text>
        </Col>
        <Col xs={12}>
          <Box {...headerBoxStyle}>
            <Button {...args} variant="disabled" size="small">disabled</Button>
            <Button {...args} variant="disabled" size="default">disabled</Button>
            <Button {...args} variant="disabled" size="large">disabled</Button>
          </Box>
        </Col>
        {/* DISABLED STOP */}

      </Row>
    </Container>
  </SectionStoryBook>
)

export const Variants = Template.bind({});
// @ts-ignore
Variants.args = args;
