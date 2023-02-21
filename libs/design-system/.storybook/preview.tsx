import { WrapperProvider } from './../src/lib/providers/WrapperProvider';

export const decorators = [
  (Story) => (
    <WrapperProvider>
      <Story />
    </WrapperProvider>
  ),
];
