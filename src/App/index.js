import {
  Preflight,
  ThemeProvider,
  defaultTheme,
  x,
} from '@xstyled/styled-components'
import React from 'react'

import SearchBar from './SearchBar'
import logo from '../images/logo.svg'

const theme = {
  ...defaultTheme,
  radii: {
    ...defaultTheme.radii,
    xxl: '1rem',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <x.div w="100%" maxWidth={1280} p={8} mx="auto">
        <x.div
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <x.img src={logo} alt="Logo" />
          <SearchBar />
        </x.div>
      </x.div>
    </ThemeProvider>
  )
}

export default App
