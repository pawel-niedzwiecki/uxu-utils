import { WrapperProvider } from './../src';

export const decorators = [
  (Story) => (
    <WrapperProvider>
      <Story />
    </WrapperProvider>
  ),
];
