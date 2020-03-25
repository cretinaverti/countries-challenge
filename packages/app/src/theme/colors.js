/* ------------------------------------------------------------------------
 | Colors
 | ------------------------------------------------------------------------
 |
 */

const gray = [
  '#f9f9f9',
  '#eceeed',
  '#dfe1e0',
  '#d0d4d2',
  '#c0c5c2',
  '#aeb4b1',
  '#9aa29d',
  '#828b86',
  '#636f68',
  '#34433a',
]

const teal = [
  '#f6faf8',
  '#e3f1e9',
  '#cfe6d8',
  '#b8dbc6',
  '#a0ceb2',
  '#84c09c',
  '#63af81',
  '#3a9a60',
  '#017d33',
  '#004a1e',
]

const cyan = [
  '#f6fafa',
  '#e2f0ef',
  '#cde6e3',
  '#b6dad7',
  '#9dcdc8',
  '#80beb8',
  '#5eada5',
  '#34988e',
  '#007a6e',
  '#004841',
]

const blue = [
  '#f7fafb',
  '#e8eef3',
  '#d7e2ea',
  '#c4d5e1',
  '#b0c7d7',
  '#99b7cb',
  '#7fa5be',
  '#608eae',
  '#367199',
  '#00426e',
]

const indigo = [
  '#f9f9fc',
  '#ecedf5',
  '#dee0ee',
  '#cfd2e7',
  '#bfc2de',
  '#adb1d5',
  '#989dca',
  '#7f85be',
  '#5f66ad',
  '#2a3492',
]

const red = [
  '#fcf9f9',
  '#f5ebec',
  '#eedddf',
  '#e6cdd0',
  '#ddbcbf',
  '#d3a8ad',
  '#c79298',
  '#ba777e',
  '#a7525b',
  '#820a16',
]

const orange = [
  '#fbf9f7',
  '#f3ece8',
  '#eadfd7',
  '#e1d0c4',
  '#d7bfb0',
  '#cbad99',
  '#be987f',
  '#ae7f60',
  '#995e37',
  '#6d2c00',
]

const yellow = [
  '#fafaf5',
  '#f0eee1',
  '#e4e2cb',
  '#d8d4b3',
  '#cbc598',
  '#bcb57b',
  '#aaa259',
  '#958b30',
  '#796d00',
  '#474000',
]

// Light base color mode.
const text = gray[9]
const background = gray[0]
const primary = teal[8]
const secondary = teal[2]
const muted = gray[5]

// Dark color mode.
// TODO: Update this.
const dark = {
  text: gray[9],
  background: gray[0],
  primary: teal[8],
  secondary: teal[2],
  muted: gray[5],
}

export default {
  gray,
  teal,
  cyan,
  blue,
  indigo,
  red,
  orange,
  yellow,

  text,
  background,
  primary,
  secondary,
  muted,

  modes: {
    dark,
  },
}
