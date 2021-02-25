import React from 'react'
import { x } from '@xstyled/styled-components'

import Icon from '../components/Icon'

const SearchBar = () => (
  <x.div
    display="grid"
    gridAutoFlow="column"
    borderRadius="xxl"
    boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
    alignItems="center"
    fontSize="sm"
    color="gray-700"
  >
    <x.div px={4}>Helsinki, Findland</x.div>
    <x.div
      border="1px solid"
      borderColor="gray-100"
      borderWidth="0 1px"
      px={4}
      py={5}
    >
      Add guests
    </x.div>
    <Icon name="search" color="red-500" w={6} h={6} mx={4} />
  </x.div>
)

export default SearchBar
