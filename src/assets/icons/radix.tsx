import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'4 0 17 25'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M12 25a8 8 0 1 1 0-16v16zm0-25H4v8h8V0zm5 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'}
      fill={'currentcolor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const RadixUiIcon = memo(ForwardRef)
