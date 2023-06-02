// import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['IBM Plex Sans Arabic', 'sans-serif'],
//   preload: false,
// })

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0090EC',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
})

export default theme
