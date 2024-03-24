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
      <path
        d={
          'M17 9c2.2 0 3.4.1 4.1.9.9.9.9 2.3.9 5.1v1c0 2.8 0 4.2-.9 5.1-.9.9-2.3.9-5.1.9H8c-2.8 0-4.2 0-5.1-.9C2 20.2 2 18.8 2 16v-1c0-2.8 0-4.2.9-5.1C3.6 9 4.9 9 7 9'
        }
      />
      <path d={'M12 2v13m0 0-3-3.5m3 3.5 3-3.5'} strokeLinejoin={'round'} />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DownloadIcon = memo(ForwardRef)
