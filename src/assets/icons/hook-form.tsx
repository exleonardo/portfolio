import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fillRule={'evenodd'}
    ref={ref}
    viewBox={'0 0 203 202'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M158 9a36 36 0 0 1 37 36v112c0 10-5 19-11 26a36 36 0 0 1-26 11H45a36 36 0 0 1-36-37V45c0-10 4-19 10-26A36 36 0 0 1 45 9z'
      }
      fill={'#ec5990'}
      stroke={'#fff'}
      strokeWidth={17}
    />
    <path
      d={
        'M133 52h-20a12 12 0 0 0-23 0H70c-9 0-15 6-15 14v78c0 8 6 14 15 14h63c9 0 15-6 15-14V66c0-8-6-14-15-14zm-41 2a1 1 0 0 0 1-1 9 9 0 0 1 17 0 1 1 0 0 0 2 1h7v9c0 2-2 4-4 4H88c-2 0-4-2-4-4v-9h8zm54 90c0 6-6 12-13 12H70c-7 0-13-6-13-12V66c0-6 6-12 13-12h12v9c0 4 3 7 6 7h27c3 0 6-3 6-7v-9h12c7 0 13 6 13 12v78zm-15-48h-24a1 1 0 0 0-1 1 1 1 0 0 0 1 1h24a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-35 0H72a1 1 0 0 0-2 1 1 1 0 0 0 2 1h24a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm35 32h-24a1 1 0 0 0-1 2 1 1 0 0 0 1 1h24a1 1 0 0 0 1-1 1 1 0 0 0-1-2zm-35 0H72a1 1 0 0 0-2 2 1 1 0 0 0 2 1h24a1 1 0 0 0 1-1 1 1 0 0 0-1-2z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const HookForm = memo(ForwardRef)
