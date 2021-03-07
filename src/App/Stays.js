import { x } from '@xstyled/styled-components'
import React from 'react'

import { useFilteredStays } from './shared/SearchingContext'
import FixedRatioBox from '../components/FixedRatioBox'
import Icon from '../components/Icon'

const StayItem = ({ photo, superHost, type, beds, title, rating }) => (
  <x.div color="gray-700">
    <FixedRatioBox ratio="3/2">
      <x.img
        src={photo}
        alt="Stay"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="xxl"
      />
    </FixedRatioBox>
    <x.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      fontSize="sm"
      my={4}
    >
      <x.div h="8" display="flex" alignItems="center">
        {superHost && (
          <x.span
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            border={1}
            borderRadius="xl"
            borderColor="gray-600"
            color="gray-600"
            p={2}
            mr={2}
          >
            Super host
          </x.span>
        )}
        <x.span color="gray-500">
          {type} . {beds} beds
        </x.span>
      </x.div>
      <x.div display="flex" alignItems="center">
        <Icon name="star" prefix="fa" color="red-500" w={4} h={4} mr={2} />
        <x.span>{rating.toFixed(2)}</x.span>
      </x.div>
    </x.div>
    <x.div
      fontWeight="semibold"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      maxWidth="80%"
    >
      {title}
    </x.div>
  </x.div>
)

const Stays = () => {
  const stays = useFilteredStays()

  return (
    <>
      <x.div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="gray-800"
        mb={8}
      >
        <x.h1 fontWeight="bold" fontSize="2xl">
          Stays in Finland
        </x.h1>
        <x.span color="gray-700" fontSize="sm">
          {stays.length} stays
        </x.span>
      </x.div>
      <x.div
        display="grid"
        gridTemplateColumns={{ _: 1, md: 3 }}
        gap={8}
        rowGap={12}
      >
        {stays.map((stay, index) => (
          <StayItem key={index} {...stay} />
        ))}
      </x.div>
    </>
  )
}

export default Stays
