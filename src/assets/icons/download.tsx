import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g stroke={'#fff'} strokeLinecap={'round'}>
      <path d={'M12 2v13m0 0-3-3.5m3 3.5 3-3.5'} strokeLinejoin={'round'} />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DownloadIcon = memo(ForwardRef)
