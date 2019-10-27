import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Nunito Sans',
      styles: ['400']
    }
  ],
  headerFontFamily: [
    'Nunito Sans',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Nunito Sans',
    'sans-serif'
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: '#333'
    },
    'a:visited': {
      color: '#333'
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
