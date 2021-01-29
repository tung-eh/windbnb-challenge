import {
  Preflight,
  ThemeProvider,
  defaultTheme,
  x,
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
      <x.div bg="blue-500">Hello world</x.div>
    </ThemeProvider>
  )
}

export default App
