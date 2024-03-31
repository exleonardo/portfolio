import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M20 2H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H4V4h16v16z'}
    />
    <path
      d={
        'm8.5 16.9 3.5-3.5 3.5 3.5 1.4-1.4-3.5-3.5 3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5z'
      }
    />
    <path d={'M0 0h24v24H0z'} fill={'none'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CloseIcon = memo(ForwardRef)
