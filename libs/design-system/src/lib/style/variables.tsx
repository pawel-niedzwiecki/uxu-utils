// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { css } from 'styled-components';
import type { ObjectMapType } from './../utils';
const createMediaPrefersColorScheme = ( {mode, isDefault}: {mode: string, isDefault: boolean}) => isDefault ? `html` : `html[data-theme='${mode}']`;





export const variables = css`
  ${({ theme: {alphas, borders, colors, contents, focuses, fontSizes, fontWeights, lineHeights, motions, radiis, shadows, spaces} }) => {
    const nameDefaultMode = 'dark';
    const nameSecondaryMode = 'light';
    const modeDefault = createMediaPrefersColorScheme( {mode: nameDefaultMode, isDefault: true});
    const modeSecondary = createMediaPrefersColorScheme( {mode: nameSecondaryMode, isDefault: false});
    const styles: ObjectMapType<string | object> = {[modeDefault]: {}, [modeSecondary]: {}};

    for (const alpha in alphas) {
      Object.assign(styles[modeDefault], {[`--uxu-alpha-${alpha}`]: `${alphas[alpha]}`})
    }

    for (const border in borders) {
      Object.assign(styles[modeDefault], {[`--uxu-border-${border}`]: borders[border]})
    }

    for (const group in colors) {
      for (const color in colors[group]) {
        Object.assign(styles[modeDefault], {
          [`--uxu-color-${group}-${color}`]: `rgb(${colors[group][color][nameDefaultMode]})`,
          [`--uxu-color-${group}-${color}-rgba`]: colors[group][color][nameDefaultMode]
        })
        Object.assign(styles[modeSecondary], {
          [`--uxu-color-${group}-${color}`]: `rgb(${colors[group][color][nameSecondaryMode]})`,
          [`--uxu-color-${group}-${color}-rgba`]: colors[group][color][nameSecondaryMode]
        })
      }
    }

    for (const content in contents) {
      Object.assign(styles[modeDefault], {[`--uxu-content-${content}`]: contents[content]})
    }

    for (const focuse in focuses) {
      Object.assign(styles[modeDefault], {[`--uxu-focuse-${focuse}`]: focuses[focuse]})
    }

    for (const fontSize in fontSizes) {
      Object.assign(styles[modeDefault], {[`--uxu-fontSize-${fontSize}`]: fontSizes[fontSize]})
    }

    for (const fontWeight in fontWeights) {
      Object.assign(styles[modeDefault], {[`--uxu-fontWeight-${fontWeight}`]: `${fontWeights[fontWeight]}`})
    }

    for (const lineHeight in lineHeights) {
      Object.assign(styles[modeDefault], {[`--uxu-lineHeight-${lineHeight}`]: lineHeights[lineHeight]})
    }

    for (const motion in motions) {
      Object.assign(styles[modeDefault], {[`--uxu-motions-${motion}`]: motions[motion]})
    }

    for (const radii in radiis) {
      Object.assign(styles[modeDefault], {[`--uxu-radii-${radii}`]: radiis[radii]})
    }

    for (const shadow in shadows) {
      Object.assign(styles[modeDefault], {[`--uxu-shadow-${shadow}`]: shadows[shadow]})
    }

    for (const space in spaces) {
      Object.assign(styles[modeDefault], {[`--uxu-space-${space}`]: spaces[space]})
    }

    return styles
  }}`
