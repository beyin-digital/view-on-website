import { GoogleOAuthProvider } from '@react-oauth/google'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <ToastContainer hideProgressBar position="bottom-center" />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default Layout
