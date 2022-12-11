import {css} from 'styled-components';
import {ObjectMapType} from "@uxu/types";

const createMediaPrefersColorScheme = (mode: string) => `@media (prefers-color-scheme: ${mode})`

export const variables = css`
  ${({theme: {colors}}) => {
    const modeDark = createMediaPrefersColorScheme('dark');
    const modeLight = createMediaPrefersColorScheme('light');
    let styles: ObjectMapType<string | object> = {[modeDark]: {}, [modeLight]: {}};

    for (const group in colors) {
      for (const color in colors[group]) {
        Object.assign(styles[modeDark], {[`--uxu-color-${group}-${color}`]: colors[group][color].dark})
        Object.assign(styles[modeLight], {[`--uxu-color-${group}-${color}`]: colors[group][color].light})
      }
    }

    return {[':root']: styles}
  }}`
