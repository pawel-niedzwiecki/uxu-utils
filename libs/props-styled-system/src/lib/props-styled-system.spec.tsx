import { render } from '@testing-library/react';

import PropsStyledSystem from './props-styled-system';

describe('PropsStyledSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< PropsStyledSystem />);
    expect(baseElement).toBeTruthy();
  });
});
