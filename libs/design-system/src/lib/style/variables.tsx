import {css} from 'styled-components';
import {ObjectMapType} from "@uxu/types";

const createMediaPrefersColorScheme = (mode: string) => `@media (prefers-color-scheme: ${mode})`

export const variables = css`
  ${({theme: {borders, colors, contents, focuses, fontSizes, fontWeights, lineHeights, motions, radiis, shadows, spaces}}) => {
    const modeDark = createMediaPrefersColorScheme('dark');
    const modeLight = createMediaPrefersColorScheme('light');
    let styles: ObjectMapType<string | object> = {[modeDark]: {}, [modeLight]: {}};

    for (const border in borders) {
      Object.assign(styles, {[`--uxu-border-${border}`]: borders[border]})
    }

    for (const group in colors) {
      for (const color in colors[group]) {
        Object.assign(styles[modeDark], {[`--uxu-color-${group}-${color}`]: colors[group][color].dark})
        Object.assign(styles[modeLight], {[`--uxu-color-${group}-${color}`]: colors[group][color].light})
      }
    }

    for (const content in contents) {
      Object.assign(styles, {[`--uxu-content-${content}`]: contents[content]})
    }

    for (const focuse in focuses) {
      Object.assign(styles, {[`--uxu-focuse-${focuse}`]: focuses[focuse]})
    }

    for (const fontSize in fontSizes) {
      Object.assign(styles, {[`--uxu-fontSize-${fontSize}`]: fontSizes[fontSize]})
    }

    for (const fontWeight in fontWeights) {
      Object.assign(styles, {[`--uxu-fontWeight-${fontWeight}`]: fontWeights[fontWeight]})
    }

    for (const lineHeight in lineHeights) {
      Object.assign(styles, {[`--uxu-lineHeight-${lineHeight}`]: lineHeights[lineHeight]})
    }

    for (const motion in motions) {
      Object.assign(styles, {[`--uxu-motions-${motion}`]: motions[motion]})
    }

    for (const radii in radiis) {
      Object.assign(styles, {[`--uxu-radii-${radii}`]: radiis[radii]})
    }

    for (const shadow in shadows) {
      Object.assign(styles, {[`--uxu-shadow-${shadow}`]: shadows[shadow]})
    }

    for (const space in spaces) {
      Object.assign(styles, {[`--uxu-space-${space}`]: spaces[space]})
    }

    return {[':root']: styles}
  }}`
