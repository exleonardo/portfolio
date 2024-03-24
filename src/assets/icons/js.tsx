import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 32 32'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M2 2h28v28H2z'} fill={'#FFCA28'} />
    <path
      d={
        'm19 25.3 2-1.4c.2.5 1.2 1.7 2.5 1.7s2-.7 2-1.1c0-1.3-1.4-1.8-2-2a3.7 3.7 0 0 1-.4-.1c-.7-.3-3.3-1.3-3.3-4.2 0-3.1 3-3.5 3.7-3.5.5 0 2.7 0 3.8 2l-2 1.5c-.5-.9-1.2-1.2-1.7-1.2-1 0-1.3.8-1.3 1.2 0 1 1.2 1.5 2.2 1.9.3 0 .5.2.8.3 1 .5 2.7 1.4 2.7 4 0 1.4-1.1 3.6-4 3.6-3.8 0-4.8-2.3-5-2.7Zm-10 .3 2.1-1.4c.2.5.9 1.4 1.8 1.4 1 0 1.5-1 1.5-1.4V15H17v9.2c0 1.3-.7 3.8-3.8 3.8-2.8 0-4-1.7-4.2-2.4Z'
      }
      fill={'#3E3E3E'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const JsIcon = memo(ForwardRef)
