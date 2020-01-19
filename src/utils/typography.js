import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Hind Madurai',
      styles: ['400', '700']
    }
  ],
  headerFontFamily: ['Hind Madurai', 'sans-serif'],
  bodyFontFamily: ['Hind Madurai', 'sans-serif'],
  overrideStyles: () => ({
    a: {
      color: '#333'
    },
    'a:visited': {
      color: '#333'
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
