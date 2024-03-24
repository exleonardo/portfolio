import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'#FF4785'}
    preserveAspectRatio={'xMidYMid'}
    ref={ref}
    strokeWidth={6.1}
    viewBox={'-32 -32 383 383'}
    xmlns={'http://www.w3.org/2000/svg'}
    xmlnsXlink={'http://www.w3.org/1999/xlink'}
    {...props}
  >
    <rect height={382.8} rx={0} stroke={'none'} width={382.8} x={-32} y={-32} />
    <defs>
      <path
        d={
          'M10 293 0 31c0-9 6-16 15-17L238 0a16 16 0 0 1 17 16v286a16 16 0 0 1-16 16l-214-9c-8-1-15-7-15-16Z'
        }
        id={'a'}
      />
    </defs>
    <mask fill={'#fff'} id={'b'}>
      <use xlinkHref={'#a'} />
    </mask>
    <use fill={'#ff4d88'} xlinkHref={'#a'} />
    <path
      d={
        'm189 39 1-37 31-2 1 38a2 2 0 0 1-4 2l-11-10-15 11a2 2 0 0 1-3-2Zm-40 81c0 6 42 3 48-1 0-43-23-65-64-65-42 0-65 23-65 57 0 59 79 60 79 92 0 9-4 15-14 15-13 0-18-7-17-29 0-5-48-6-50 0-4 54 30 69 68 69 37 0 66-20 66-55 0-64-81-62-81-93 0-13 9-15 15-15s16 1 15 25Z'
      }
      fill={'#fff'}
      mask={'url(#b)'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const StoryBookIcon = memo(ForwardRef)
