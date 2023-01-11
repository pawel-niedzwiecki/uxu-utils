export type Colors = typeof colors;

export const colors = {
  primary: {
    foreground: {dark: '255, 255, 255', light: '0, 0, 0'},
    background: {dark: '0, 0, 0', light: '255, 255, 255'},
    accent1: {dark: '17, 17, 17', light: '250, 250, 250'},
    accent2: {dark: '51, 51, 51', light: '234, 234, 234'},
    accent3: {dark: '68, 68, 68', light: '153, 153, 153'},
    accent4: {dark: '102, 102, 102', light: '136, 136, 136'},
    accent5: {dark: '136, 136, 136', light: '102, 102, 102'},
    accent6: {dark: '153, 153, 153', light: '68, 68, 68'},
    accent7: {dark: '234, 234, 234', light: '51, 51, 51'},
    accent8: {dark: '250, 250, 250', light: '17, 17, 17'},
  },

  error: {
    lighter: {dark: '247, 212, 214', light: '247, 212, 214'},
    light: {dark: '255, 51, 51', light: '255, 26, 26'},
    default: {dark: '255, 26, 26', light: '238, 0, 0'},
    dark: {dark: '230, 0, 0', light: '197, 0, 0'},
  },

  success: {
    lighter: {dark: '211, 229, 255', light: '211, 229, 255'},
    light: {dark: '50, 145, 255', light: '50, 145, 255'},
    default: {dark: '0, 112, 243', light: '0, 112, 243'},
    dark: {dark: '7, 97, 209', light: '7, 97, 209'},
  },

  warning: {
    lighter: {dark: '255, 239, 207', light: '255, 239, 207'},
    light: {dark: '247, 185, 85', light: '247, 185, 85'},
    default: {dark: '245, 166, 35', light: '245, 166, 35'},
    dark: {dark: '171, 87, 10', light: '171, 87, 10'},
  },

  violet: {
    lighter: {dark: '216, 204, 241', light: '216, 204, 241'},
    light: {dark: '138, 99, 210', light: '138, 99, 210'},
    default: {dark: '121, 40, 202', light: '121, 40, 202'},
    dark: {dark: '76, 40, 137', light: '76, 40, 137'},
  },

  cyan: {
    lighter: {dark: '170, 255, 236', light: '170, 255, 236'},
    light: {dark: '121, 255, 225', light: '121, 255, 225'},
    default: {dark: '0, 255, 240', light: '0, 255, 240'},
    dark: {dark: '41, 188, 155', light: '41, 188, 155'},
  },

  highlight: {
    purple: {dark: '248, 28, 229', light: '248, 28, 229'},
    magenta: {dark: '235, 54, 127', light: '235, 54, 127'},
    pink: {dark: '255, 0, 128', light: '255, 0, 128'},
    yellow: {dark: '255, 245, 0', light: '255, 245, 0'},
  },
} as const;
