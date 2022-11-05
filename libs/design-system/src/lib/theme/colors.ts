export type Colors = typeof colors;

export const colors = {
  primary: {
    foreground: { dark: '#FFF', light: '#000' },
    background: { dark: '#000', light: '#FFF' },
    accent1: { dark: '#111', light: '#FAFAFA' },
    accent2: { dark: '#333', light: '#EAEAEA' },
    accent3: { dark: '#444', light: '#999' },
    accent4: { dark: '#666', light: '#888' },
    accent5: { dark: '#888', light: '#666' },
    accent6: { dark: '#999', light: '#444' },
    accent7: { dark: '#EAEAEA', light: '#333' },
    accent8: { dark: '#FAFAFA', light: '#111' },
  },
  error: {
    lighter: { dark: '#F7D4D6', light: '#F7D4D6' },
    light: { dark: '#F33', light: '#FF1A1A' },
    default: { dark: 'RED', light: '#E00' },
    dark: { dark: '#E60000', light: '#C50000' },
  },
  success: {
    lighter: { dark: '#D3E5FF', light: '#D3E5FF' },
    light: { dark: '#3291FF', light: '#3291FF' },
    default: { dark: '#0070F3', light: '#0070F3' },
    dark: { dark: '#0761D1', light: '#0761D1' },
  },
  warning: {
    lighter: { dark: '#FFEFCF', light: '#FFEFCF' },
    light: { dark: '#F7B955', light: '#F7B955' },
    default: { dark: '#F5A623', light: '#F5A623' },
    dark: { dark: '#AB570A', light: '#AB570A' },
  },
  violet: {
    lighter: { dark: '#D8CCF1', light: '#D8CCF1' },
    light: { dark: '#8A63D2', light: '#8A63D2' },
    default: { dark: '#7928CA', light: '#7928CA' },
    dark: { dark: '#4C2889', light: '#4C2889' },
  },
  cyan: {
    lighter: { dark: '#AAFFEC', light: '#AAFFEC' },
    light: { dark: '#79FFE1', light: '#79FFE1' },
    default: { dark: '#00FFF0', light: '#00FFF0' },
    dark: { dark: '#29BC9B', light: '#29BC9B' },
  },
  highlight: {
    purple: { dark: '#F81CE5', light: '#F81CE5' },
    magenta: { dark: '#EB367F', light: '#EB367F' },
    pink: { dark: '#FF0080', light: '#FF0080' },
    yellow: { dark: '#FFF500', light: '#FFF500' },
  },
} as const;
