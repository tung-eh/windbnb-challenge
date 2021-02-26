import { x } from '@xstyled/styled-components'

const FixedRatioBox = ({ ratio = '1/1', ...props }) => (
  <x.div
    position="relative"
    width="100%"
    pt={`calc(100% / (${ratio}))`}
    {...props}
  />
)

export default FixedRatioBox
