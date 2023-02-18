import * as React from 'react';
import {colors} from './../../theme';
import {Box, Col, Row, SectionStoryBook} from './../../components';



const args = {
  padding: 'big',
  textAlign: 'center',
  width: '100%',
  fontWeight: 'bold',
  paddingTop: "default",
  paddingBottom: "default",
  paddingLeft: "default",
  paddingRight: "default",
}

export default {
  title: 'StyleGuide /Colors',
  component: Box,
};

const setColor = (color: string) => color === `primary.background` || color === `primary.accent1` ? "primary.foreground" : "primary.background"


const Template = () => (
    <SectionStoryBook
      title="Color"
      description="Gallery of colors used across UXU products.">
      {Object.keys(colors).map((group, index) => {
        return (
          <Row key={index} borderRadius="default" border="default"
               style={{marginTop: index ? "3rem" : "", overflow: "hidden"}}>
            <Col xs={12}><Box {...args} fontSize="h2">{group}</Box></Col>
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
    </SectionStoryBook>
  )
;

export const Colors = Template.bind({});
