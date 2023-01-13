import * as React from 'react';
import { Box, Col, Container, Row } from 'components';
import { colors } from 'theme';


const args = {
  padding: 'big',
  textAlign: 'center',
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
        <Box {...args} paddingTop="without" fontSize="default" fontWeight="normal" color="primary.accent4">Gallery of
          colors used across UXU products.</Box>
      </Col>
    </Row>
    {Object.keys(colors).map((group, index) => {
      return (
        <Row key={index} borderRadius="default" border="default" style={{marginTop: index ? "3rem" : "", overflow: "hidden"}}>
          <Col xs={12}><Box {...args} fontSize="fs2">{group}</Box></Col>
          {Object.keys(colors[group]).map((color, index) => (
            <>
              <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
                <Box {...args} >{group}.{color}</Box>
              </Col>
              <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
                <Box {...args}>--uxu-color-{group}-{color}</Box>
              </Col>
              <Col xs={4} backgroundColor={`${group}.${color}`} color={setColor(`${group}.${color}`)}>
                <Box {...args} >{`${colors[group][color].dark}`}</Box>
              </Col>
            </>
          ))}
        </Row>
      )
    })}
  </Container>
);

export const Colors = Template.bind({});
