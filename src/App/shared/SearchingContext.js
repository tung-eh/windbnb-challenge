import React, { createContext, useState } from 'react'

const SearchingContext = createContext({})

export const SearchingContextProvider = ({ children }) => {
  const [location, setLocation] = useState('Helsinki, Findland')
  const [guests, setGuests] = useState({ adults: 0, children: 0 })
  return (
    <SearchingContext.Provider
      value={{ location, setLocation, guests, setGuests }}
    >
      {children}
    </SearchingContext.Provider>
  )
}

export default SearchingContext
