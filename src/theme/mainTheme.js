const breakpoints = {
  xs: 390,
  s: 576,
  md: 768,
  lg: 992,
  xl: 1440,
}

export const theme = {
  fonts: {
    mainFont: `'Barlow Semi Condensed', sans-serif`,
  },
  white: 'hsl(0, 0%, 100%)',
  dark: 'hsl(229, 25%, 31%)',
  score: 'hsl(229, 64%, 46%)',
  gray: 'hsl(217, 16%, 45%)',
  background:
    'radial-gradient(circle, #1f3756, #1b2e4f, #182648, #161d41, #141539)',
  scissors: 'linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
  paper: 'linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
  rock: 'linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
  lizard: 'linear-gradient(to right, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
  spock: 'linear-gradient(to right, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
  semiBold: 600,
  bold: 700,
  fontSize: {
    xs: '1.2rem',
    s: '1.4rem',
    m: '1.6rem',
    lg: '3rem',
    xl: '5.4rem',
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`
    return acc
  }, {}),
}
