import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    preserveAspectRatio={'xMidYMid'}
    ref={ref}
    viewBox={'0 0 256 256'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M0 128v128h256V0H0z'} fill={'#007ACC'} />
    <path
      d={
        'M56.6 128.8v10.5h33.3V234h23.5v-94.7h33.3v-10.2c0-5.7 0-10.5-.2-10.6-.2-.2-20.4-.3-45-.2l-44.8.1v10.4Zm150-10.7a31.9 31.9 0 0 1 16 9.2c2.3 2.6 5.8 7.1 6.1 8.2 0 .4-11 7.8-17.8 12-.2.2-1.2-.9-2.3-2.5-3.3-4.8-6.7-6.9-12-7.2-7.8-.6-12.8 3.5-12.7 10.3 0 2 .2 3.2 1 4.8 1.8 3.5 5 5.6 14.9 10 18.3 7.8 26.1 13 31 20.4a37.1 37.1 0 0 1 3 31.2c-4 10.7-14.1 18-28.3 20.3a75 75 0 0 1-19.5-.2 47 47 0 0 1-26-13.6c-2.4-2.6-7-9.4-6.7-9.8a2340.3 2340.3 0 0 0 11.9-7l7.3-4.3 1.5 2.3c2.2 3.3 6.9 7.8 9.7 9.3 8.2 4.3 19.4 3.7 25-1.3a9.4 9.4 0 0 0 3.3-7.7c0-3-.4-4.2-2-6.5-2-2.8-6-5.2-17.5-10.2-13.2-5.7-19-9.2-24.1-14.8-3-3.3-5.9-8.5-7-12.8-1-3.6-1.3-12.7-.5-16.4 2.7-12.7 12.3-21.6 26.2-24.3a67 67 0 0 1 19.5.6Z'
      }
      fill={'#FFF'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TsIcon = memo(ForwardRef)
