import React from 'react'
import Navbar from '../components/Navbar' 
import theme from '@hackclub/theme'
import { ThemeUIProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default function App({ Component, pageProps }) {
 return (
    <ThemeProvider theme={theme}>
      <Navbar /> 
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
