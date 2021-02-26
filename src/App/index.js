import {
  Preflight,
  ThemeProvider,
  defaultTheme,
  x,
} from '@xstyled/styled-components'
import React from 'react'

import SearchBar from './SearchBar'
import Stays from './Stays'
import logo from '../images/logo.svg'

const theme = {
  ...defaultTheme,
  radii: {
    ...defaultTheme.radii,
    xxl: '1rem',
  },
  fonts: {
    sans: 'Montserrat, sans-serif',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <x.div w="100%" maxWidth={1280} fontFamily="sans" p={8} mx="auto">
        <x.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={16}
        >
          <x.img src={logo} alt="Logo" />
          <SearchBar />
        </x.div>
        <Stays />
      </x.div>
    </ThemeProvider>
  )
}

export default App
