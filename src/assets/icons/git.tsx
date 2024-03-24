import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 32 32'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M2.6 17.4a2 2 0 0 1 0-2.8l12-12a2 2 0 0 1 2.8 0l12 12c.8.8.8 2 0 2.8l-12 12a2 2 0 0 1-2.8 0l-12-12Z'
      }
      fill={'#EE513B'}
    />
    <path
      d={
        'M12.1 5 11 6.4l3.2 3.1a2.1 2.1 0 0 0 1.1 2.9V20a2.1 2.1 0 1 0 1.8 0v-7.7l3 3c-.2.3-.2.6-.2.9a2.1 2.1 0 1 0 1.5-2L18 10.9a2.1 2.1 0 0 0-2.6-2.6L12 5Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const GitIcon = memo(ForwardRef)
