export const createMediaPrefersColorScheme = (mode: string) => `@media (prefers-color-scheme: ${mode})`

export const createMediaQuery = (width: number) => `@media screen and (min-width: ${width}px)`
