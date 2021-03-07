import { x } from '@xstyled/styled-components'
import React, { useContext, useState } from 'react'

import Icon from '../../components/Icon'
import InputsModal from './InputsModal'
import SearchingContext from '../shared/SearchingContext'

const SearchBar = () => {
  const [openModal, setOpen] = useState(false)

  const {
    location,
    guests: { adults, children },
  } = useContext(SearchingContext)

  const noGuest = adults === 0 && children === 0

  return (
    <>
      <x.div
        display="grid"
        gridAutoFlow="column"
        borderRadius="xxl"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        alignItems="center"
        fontSize="sm"
        color="gray-700"
        onClick={() => setOpen(true)}
      >
        <x.div color={!location && 'gray-400'} minWidth="8rem" px={4}>
          {location || 'Choose location'}
        </x.div>
        <x.div
          border="1px solid"
          borderColor="gray-100"
          borderWidth="0 1px"
          color={noGuest && 'gray-400'}
          px={4}
          py={5}
        >
          {noGuest ? 'Add guests' : `${adults + children} guests`}
        </x.div>
        <Icon name="search" color="red-500" w={6} h={6} mx={4} />
      </x.div>
      <InputsModal
        open={openModal}
        onClickOutside={() => setOpen(false)}
        closeSelf={() => setOpen(false)}
      />
    </>
  )
}

export default SearchBar
