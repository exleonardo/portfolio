import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={128}
    ref={ref}
    viewBox={'0 0 512 75'}
    width={128}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M254 9v60l-6 6V25h-13l19-16Zm228-9 15 2 12 6-7 13-2-2h-2v-1l-8-3a30 30 0 0 0-9-1c-8 0-12 2-12 7 0 3 1 5 4 6h3v1h3l1 1h3l1 1h3l13 5c4 1 7 4 9 6v1c2 2 3 6 3 10 0 6-1 10-4 13-3 4-6 6-11 7-4 2-9 3-14 3a64 64 0 0 1-33-9v-1l7-13 5 3a47 47 0 0 0 21 5c8 0 12-2 12-6 0-3-2-5-6-6l-1-1h-1l-1-1h-3l-1-1h-3l-1-1h-2l-1-1c-8-2-13-4-17-7-3-3-5-7-5-13a20 20 0 0 1 14-20c4-2 9-3 15-3ZM360 0c6 0 11 1 15 3h1c5 2 9 5 12 9a37 37 0 0 1 11 25c0 5-1 10-3 14a38 38 0 0 1-36 23c-6 0-11-1-16-3a39 39 0 0 1-20-20 36 36 0 0 1 0-28 36 36 0 0 1 8-11l1-1a39 39 0 0 1 27-11ZM45 1l32 73H60l-7-18H24l-7 18H0L32 1h13Zm93 0 21 25 20-25h17l-29 37 28 36h-17l-19-25-20 25h-17l28-36-29-37h17Zm128-1v49h13l-19 16V5l6-5Zm94 14c-5 0-9 1-12 4-4 2-6 5-8 8a24 24 0 0 0 8 31c3 2 7 3 12 3a21 21 0 0 0 20-12c2-4 3-7 3-11s-1-8-3-11c-2-4-5-6-8-8-3-3-7-4-12-4ZM38 20 28 43h21L38 20Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const AxiosIcon = memo(ForwardRef)
