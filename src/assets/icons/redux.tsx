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
        'M21.8 21.6c1-.2 2-1.1 1.9-2.2 0-1.1-1-2-2.1-2h-.1a2 2 0 0 0-2 2.1c0 .6.2 1 .5 1.4a13.6 13.6 0 0 1-6.2 6c-2 1-4.2 1.3-6.3 1a5 5 0 0 1-3.8-2.1 5.4 5.4 0 0 1-.4-5.9A8.9 8.9 0 0 1 6 17a20 20 0 0 1-.5-1.9c-5.5 4-5 9.3-3.2 11.8 1.2 1.9 3.8 3 6.6 3 .8 0 1.5 0 2.3-.2 4.9-1 8.6-3.8 10.7-8Zm6.7-4.7a15.6 15.6 0 0 0-12-5.2h-.7c-.3-.7-1-1.1-1.8-1.1h-.1a2 2 0 0 0-2 2.2c0 1.1 1 2 2 2h.1c.9 0 1.6-.6 2-1.3h.6c2.9 0 5.6.8 8.1 2.5 2 1.2 3.3 2.8 4 4.8.7 1.5.7 3 0 4.4-1 2-2.9 3-5.2 3-1.6 0-3-.4-3.8-.7L18 28.8a12 12 0 0 0 5 1.2c3.6 0 6.3-2 7.3-4 1.1-2.2 1-6-1.8-9.1ZM9.1 22.2c0 1.1 1 2 2.2 2a2 2 0 0 0 2-2.2c0-1-.9-2-2-2h-.4a13.6 13.6 0 0 1-2-8.3A10 10 0 0 1 11.2 6c1-1.4 3.2-2 4.7-2.1 4 0 5.7 4.9 5.8 6.9.5 0 1.4.3 2 .5-.5-6-4.3-9.2-8-9.2A8.6 8.6 0 0 0 8 8c-1.8 4.8-.7 9.5 1.5 13.1a2 2 0 0 0-.3 1Z'
      }
      fill={'#764ABC'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ReduxIcon = memo(ForwardRef)
