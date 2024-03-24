import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    preserveAspectRatio={'xMidYMid'}
    ref={ref}
    viewBox={'0 -58 256 256'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M78 92.6a23.2 23.2 0 1 0 0-46.4 23.2 23.2 0 0 0 0 46.4ZM23.3 139a23.2 23.2 0 1 0 0-46.4 23.2 23.2 0 0 0 0 46.4Zm209.6 0a23.2 23.2 0 1 0 0-46.4 23.2 23.2 0 0 0 0 46.4Z'
      }
    />
    <path
      d={
        'M156.6 70.4c-.8-7.8-1.2-14.3-7-18.8-7.6-5.7-16.1-2-26.6-5.8a23.3 23.3 0 0 1-18-22.6A23.4 23.4 0 0 1 128.6 0c9.7 0 18 5.7 21.7 13.9 5.6 10.6 2 21.5 9 26.9 8.3 6.5 19.5 1.7 32 7.9a22.9 22.9 0 0 1 13.6 21c.1 11-7.6 20-17.9 22.6-10.5 3.8-19 0-26.5 5.8-8.5 6.5-4 17.3-10.8 28.7a23.7 23.7 0 0 1-21 12.6 23.1 23.1 0 0 1-10.1-44.2c12.6-6.2 23.8-1.5 32.1-8 4.8-3.6 5.9-9.4 5.9-16.8Z'
      }
      fill={'#D0021B'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ReactRouterIcon = memo(ForwardRef)
