import { x } from '@xstyled/styled-components'

// Copy from https://gist.github.com/gordonbrander/2230317
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const Input = ({ label, id, ...props }) => {
  const inputId = id || generateId()

  return (
    <x.div position="relative" color="gray-700">
      <x.label
        htmlFor={inputId}
        position="absolute"
        fontSize="xxs"
        fontWeight="bold"
        textTransform="uppercase"
        left="1.5rem"
        top="1rem"
      >
        {label}
      </x.label>
      <x.input
        id={inputId}
        borderRadius="xxl"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        fontSize="sm"
        px={6}
        pt={8}
        pb={3}
        w="100%"
        {...props}
      />
    </x.div>
  )
}

export default Input
