import { x } from '@xstyled/styled-components'
import React, { useContext, useEffect } from 'react'

import Icon from '../../components/Icon'
import Input from '../../components/Input'
import SearchingContext from '../shared/SearchingContext'

const useScrollLock = (condition) => {
  useEffect(() => {
    if (condition) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [condition])
}

const InputsModal = ({ open, onClickOutside, closeSelf }) => {
  useScrollLock(open)
  const {
    location,
    setLocation,
    guests: { adults, children },
    setGuests,
  } = useContext(SearchingContext)

  return (
    open && (
      <x.div
        position="fixed"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(79, 79, 79, 0.4);"
        zIndex={1}
        onClick={onClickOutside}
      >
        <x.div
          width="100%"
          bg="white"
          display="flex"
          justifyContent="center"
          onClick={(e) => e.stopPropagation()}
        >
          <x.div
            w="100%"
            maxWidth={1280}
            fontFamily="sans"
            display="grid"
            gridTemplateColumns="3fr 3fr 1fr"
            gap={10}
            px={8}
            py={24}
          >
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
              placeholder="Choose location"
            />
            <Input
              value={adults + children}
              onChange={(e) =>
                setGuests({ adults: parseInt(e.target.value), children: 0 })
              }
              type="number"
              label="Guests"
              placeholder="Add guests"
            />
            <x.button
              borderRadius="xxl"
              bg="red-500"
              color="white"
              fontWeight="semibold"
              fontSize="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={2}
              my={1}
              onClick={closeSelf}
            >
              <Icon name="search" w={5} h={5} mr={2} />
              Search
            </x.button>
          </x.div>
        </x.div>
      </x.div>
    )
  )
}

export default InputsModal
