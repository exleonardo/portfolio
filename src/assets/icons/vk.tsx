import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={50}
    ref={ref}
    viewBox={'0 0 1024 1024'}
    width={45}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={512} cy={512} fill={'#2787f5'} r={512} />
    <path
      d={
        'M586 272H438c-135 0-166 31-166 166v148c0 135 31 166 166 166h148c135 0 166-31 166-166V438c0-135-32-166-166-166zm74 343h-35c-13 0-17-11-41-35-21-20-30-23-35-23-7 0-9 2-9 12v32c0 8-3 13-26 13-37 0-78-22-106-64-44-61-56-107-56-116 0-5 2-10 12-10h35c9 0 12 4 16 14 17 49 46 93 58 93 4 0 6-2 6-13v-52c-1-23-14-25-14-34 0-4 4-8 9-8h55c8 0 10 4 10 13v69c0 8 4 11 6 11 4 0 8-3 16-11 25-28 43-72 43-72 2-5 7-10 15-10h35c11 0 13 6 11 13-5 21-47 81-47 81-4 6-5 9 0 16 3 5 16 15 24 25 15 17 26 31 29 41 4 10-1 15-11 15z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const VkIcon = memo(ForwardRef)
