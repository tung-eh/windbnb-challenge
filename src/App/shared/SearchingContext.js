import React, { createContext, useContext, useState } from 'react'

import stays from '../../stays.json'

const SearchingContext = createContext({})

export const SearchingContextProvider = ({ children }) => {
  const [location, setLocation] = useState('Helsinki, Finland')
  const [guests, setGuests] = useState({ adults: 0, children: 0 })
  return (
    <SearchingContext.Provider
      value={{ location, setLocation, guests, setGuests }}
    >
      {children}
    </SearchingContext.Provider>
  )
}

export const useFilteredStays = () => {
  const {
    location,
    guests: { adults, children },
  } = useContext(SearchingContext)

  return stays.filter(
    ({ city, country, maxGuests }) =>
      `${city}, ${country}`.includes(location) && maxGuests >= adults + children
  )
}

export default SearchingContext
