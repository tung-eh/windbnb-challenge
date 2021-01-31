import {
  Preflight,
  ThemeProvider,
  defaultTheme,
} from '@xstyled/styled-components'
import React from 'react'

const theme = {
  ...defaultTheme,
  // Customize theme here
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
    </ThemeProvider>
  )
}

export default App
