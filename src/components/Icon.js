import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import React from 'react'
import styled from '@xstyled/styled-components'

const capitalize = (name) => {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const Svg = styled.svgBox``

const Icons = { ...MdIcons, ...FaIcons }

const Icon = ({ name, prefix = 'md', ...props }) => {
  const Component = Icons[capitalize(`${prefix}_${name}`)]

  return <Svg as={Component} display="inline" {...props} />
}

export default Icon
