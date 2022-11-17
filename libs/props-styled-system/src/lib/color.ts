import { system } from './core'

const config = {

  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}


export const color = system(config)

export default color
