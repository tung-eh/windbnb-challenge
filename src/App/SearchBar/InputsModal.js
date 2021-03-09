import { x } from '@xstyled/styled-components'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit } = useForm()

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
          <x.form
            w="100%"
            maxWidth={1280}
            fontFamily="sans"
            display="grid"
            gridTemplateColumns={{ _: '1fr', md: '3fr 3fr 1fr' }}
            gap={10}
            px={8}
            py={24}
            onSubmit={handleSubmit(({ location, guests }) => {
              setLocation(location)
              setGuests({ adults: parseInt(guests), children: 0 })
              closeSelf()
            })}
          >
            <Input
              name="location"
              defaultValue={location}
              label="Location"
              placeholder="Choose location"
              ref={register}
            />
            <Input
              name="guests"
              defaultValue={adults + children}
              type="number"
              label="Guests"
              placeholder="Add guests"
              ref={register}
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
              alignSelf="center"
              justifySelf="center"
              py={4}
              px={10}
            >
              <Icon name="search" w={5} h={5} mr={2} />
              Search
            </x.button>
          </x.form>
        </x.div>
      </x.div>
    )
  )
}

export default InputsModal
