import * as React from 'react';
import {Box, Grid, LoadingWheel} from "components";

type Args = typeof args;

const args = {
  size: 5,
} as const;

export default {
  title: 'Components /Loading',
  component: LoadingWheel,
  argTypes: {
    size: {control: {type: 'number', min: 1, step: 1}}
  },
};

const Template = (args: Args) => (
  <>
    <Grid
      gridTemplateColumns="1fr"
      width="100%"
      container
    >
      <Box
        fontSize="fs1"
        paddingTop="big"
        fontWeight="bold"
        width="100%"
        color="primary.foreground"
        textAlign='center'
      >
        Loading dots
      </Box>
      <Box
        paddingTop="big"
        width="100%"
        color="primary.accent4"
        paddingBottom='big'
        textAlign='center'
      >
        System animate loading is used in UXU products.
      </Box>
    </Grid>
    <Grid
      container
      width="100%"
      gridTemplateRows="1fr"
      gridTemplateColumns="1fr"
    >

      <Box
        width="100%"
        fontWeight="bold"
        padding="default"
        borderRadius="default"
        backgroundColor="success.default"
        style={{justifyContent: 'center', display: 'flex'}}
      >
        <LoadingWheel {...args}/>
      </Box>

    </Grid>

  </>
);

export const Wheel = Template.bind(
  {}
);

// @ts-ignore
Wheel.args = args;
