/* ------------------------------------------------------------------------
 | Typography.
 | ------------------------------------------------------------------------
 |
 */

export const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72]

export const fonts = {
  body: '"IBM Plex Sans", system-ui, sans-serif',
  heading: '"IBM Plex Serif", system-ui, sans-serif',
  monospace: '"IBL Plex Mono", Menlo, monospace',
}

export const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

export const lineHeights = {
  body: 1.5,
  heading: 1.125,
}

export const text = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
  },
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
}
