import { x } from '@xstyled/styled-components'
import React from 'react'

import FixedRatioBox from '../components/FixedRatioBox'
import stays from '../stays.json'

const StayItem = ({ photo }) => (
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
)

const Stays = () => (
  <>
    <x.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="gray-800"
      mb={8}
    >
      <x.h1 fontWeight="bold" fontSize="2xl">
        Stays in Findland
      </x.h1>
      <x.span color="gray-700" fontSize="sm">
        12+ stays
      </x.span>
    </x.div>
    <x.div display="grid" gridTemplateColumns={3} gap={8}>
      {stays.map((stay, index) => (
        <StayItem key={index} {...stay} />
      ))}
    </x.div>
  </>
)

export default Stays
