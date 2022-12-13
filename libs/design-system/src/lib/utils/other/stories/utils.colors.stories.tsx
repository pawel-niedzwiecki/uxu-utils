import * as React from 'react';
import {Box} from 'components/atoms/box';
import {colors} from "theme/theme";
import {Container, Row, Col} from "components/atoms/flex";


const args = {
  padding: 'default',
  textAlign: 'left',
  width: '100%',
  fontWeight: 'bold',
}

export default {
  title: 'StyleGuide /Colors',
  component: Box,
};

const setColor = (color: string) => color === `primary.background` || color === `primary.accent1` ? "primary.foreground" : "primary.background"

const Template = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Box {...args} fontSize="fs1" color="primary.foreground">Color</Box>
        <Box {...args} paddingTop="without" fontSize="default" fontWeight="normal" color="primary.foreground">Gallery of
          colors used across UXU products.</Box>
      </Col>
    </Row>
    {Object.keys(colors).map((group) => {
      return Object.keys(colors[group]).map((color, index) => (
        <Row key={index}>
          <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
            <Box {...args} >{group}.{color}</Box>
          </Col>
          <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
            <Box {...args}>--uxu-color-{group}-{color}</Box>
          </Col>
          <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
            <Box {...args} >{`${colors[group][color].dark}`}</Box>
          </Col>
        </Row>
      ))
    })}
  </Container>
);

export const Colors = Template.bind({});
