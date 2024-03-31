import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M5 12h13M5 17h6M5 7h10'} stroke={'white'} strokeLinecap={'round'} strokeWidth={2} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const BurgerIcon = memo(ForwardRef)
