import {css} from 'styled-components';
import {ObjectMapType} from "@uxu/types";
import {borders, fontSizes, lineHeights, space} from "theme";

const createMediaPrefersColorScheme = (mode: string) => `@media (prefers-color-scheme: ${mode})`

export const variables = css`
  ${({theme: {borders, colors, fontSizes, lineHeights, motions, radii, space}}) => {
    const modeDark = createMediaPrefersColorScheme('dark');
    const modeLight = createMediaPrefersColorScheme('light');
    let styles: ObjectMapType<string | object> = {[modeDark]: {}, [modeLight]: {}};

    for (const name in borders) {
      Object.assign(styles, {[`--uxu-border-${name}`]: borders[name]})
    }

    for (const group in colors) {
      for (const color in colors[group]) {
        Object.assign(styles[modeDark], {[`--uxu-color-${group}-${color}`]: colors[group][color].dark})
        Object.assign(styles[modeLight], {[`--uxu-color-${group}-${color}`]: colors[group][color].light})
      }
    }

    for (const name in fontSizes) {
      Object.assign(styles, {[`--uxu-fontSize-${name}`]: fontSizes[name]})
    }

    for (const name in lineHeights) {
      Object.assign(styles, {[`--uxu-lineHeight-${name}`]: lineHeights[name]})
    }

    for (const name in motions) {
      Object.assign(styles, {[`--uxu-motion-${name}`]: motions[name]})
    }

    for (const name in radii) {
      Object.assign(styles, {[`--uxu-radii-${name}`]: radii[name]})
    }

    for (const name in space) {
      Object.assign(styles, {[`--uxu-space-${name}`]: space[name]})
    }

    return {[':root']: styles}
  }}`
