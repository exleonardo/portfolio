import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    data-name={'Layer 2'}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={25}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M6 11a2 2 0 0 0-2 2h0v22a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2h0V13a2 2 0 0 0-2-2H6Zm34 4L24 26 8 15'
      }
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const MailIcon = memo(ForwardRef)
