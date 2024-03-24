import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 32 32'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M6 28 4 3h24l-2 25-10 3-10-3Z'} fill={'#1172B8'} />
    <path d={'M26 5H16v24.5l8-2.5 2-22Z'} fill={'#3AD'} />
    <path
      d={
        'M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CssIcon = memo(ForwardRef)
