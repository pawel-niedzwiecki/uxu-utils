# UXU PROPS STYLED SYSTEM
<hr>

* This library was generated with [Nx](https://nx.dev).
* This library working with [UXUStarter](https://github.com/pawel-niedzwiecki/UXUStarter)

## Feature
<hr>

* Responsive, theme-based style props for building design systems with React
* Quickly set responsive font-size, margin, padding, width, and more with props
* Influenced by constraint-based design system principles
* Typographic scale
* Spacing scale for margin and padding
* Works with any color palette
* Works with most css-in-js libraries, including styled-components
* Writed in TypeScript


## Usage
<hr>

```jsx

import styled from 'styled-components'
import {listensPropsColor, listensPropsSpace} from '@uxu/props-styled-system';

// Add styled-system functions to your component
const Box = styled.div`
  ${listensPropsColor}
  ${listensPropsSpace}
`
```

Each style function exposes its own set of component props that handle styles based on values defined in a theme.

``` jsx
<Box width={125} />

// font-size
<Box fontSize="default" />

// margin
<Box margin="default" />

// responsife margin
<Box margin={{ xs: "default", l: "big" }} />
```
