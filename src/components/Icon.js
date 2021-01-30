import * as MdIcons from 'react-icons/md'
import React from 'react'
import styled from '@xstyled/styled-components'

const capitalize = (name) => {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const Svg = styled.svgBox``

const Icon = ({ name, ...props }) => {
  const Component = MdIcons[`Md${capitalize(name)}`]

  return <Svg as={Component} display="inline" {...props} />
}

export default Icon
