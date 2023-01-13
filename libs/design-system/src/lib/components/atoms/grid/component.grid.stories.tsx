import * as React from 'react';
import {Box, Grid as G} from 'components';

type Args = typeof args;

const args = {
  gridGap: '3rem 3rem',
  gridTemplateRows: "1fr 10rem repeat(2, 1fr) 10rem auto",
  xs: 'repeat(1, 1fr)',
  s: 'repeat(2, 1fr)',
  m: 'repeat(3, 1fr)',
  l: 'repeat(4, 1fr)',
  xl: 'repeat(6, 1fr)',
} as const;

export default {
  title: 'Styleguide /Grid',
  component: G,
  argTypes: {
    gridGap: {label: {control: 'text'}},
    gridTemplateRows: {label: {control: 'text'}},
    xs: {label: {control: 'text'}},
    s: {label: {control: 'text'}},
    m: {label: {control: 'text'}},
    l: {label: {control: 'text'}},
    xl: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <>
    <G
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
        Grid system
      </Box>
      <Box
        paddingTop="big"
        width="100%"
        color="primary.accent4"
        paddingBottom='big'
        textAlign='center'
      >
        System grid is used in UXU products. The system uses display:grid
      </Box>
    </G>
    <G
      gridGap={args.gridGap}
      gridTemplateRows={args.gridTemplateRows}
      gridTemplateColumns={{
        xs: args.xs,
        s: args.s,
        m: args.m,
        l: args.l,
        xl: args.xl,
      }}
      width="100%"
      container
    >
      {new Array(12).fill(undefined).map((item, i) => (
        <G key={i}>
          <Box
            width="100%"
            backgroundColor="success.default"
            padding="default" textAlign="center"
            borderRadius="default"
            fontWeight="bold"
          >
            ITEM {i + 1}</Box>
        </G>
      ))}
    </G>

  </>
);

export const Grid = Template.bind(
  {}
);

// @ts-ignore
Grid.args = args;
