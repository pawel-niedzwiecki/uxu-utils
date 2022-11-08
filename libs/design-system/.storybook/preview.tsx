import { WrapperProvider } from 'providers';

export const decorators = [
  (Story) => (
    <WrapperProvider>
      <Story />
    </WrapperProvider>
  ),
];
