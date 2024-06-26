import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox={'0 0 32 32'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm16.2 18.7-2 1-1.3.8v-.1c-2.2-2.3-6-3.8-5.9-6.8.1-1.1.5-4 7.4-7.5 5.8-2.8 10.4-2 11.1-.3 1.2 2.5-2.4 7.1-8.3 7.8a4.5 4.5 0 0 1-3.8-1c-.3-.3-.3-.3-.5-.3v.6a3.5 3.5 0 0 0 2.2 1.7 11.4 11.4 0 0 0 7-.7c3.5-1.4 6.3-5.2 5.5-8.5-.8-3.3-6.3-4.3-11.4-2.5a26 26 0 0 0-8.8 5c-2.9 2.7-3.3 5-3.1 6 .6 3.4 5.4 5.6 7.3 7.3l-.3.1c-1 .5-4.5 2.4-5.4 4.4-1 2.3.1 3.9.9 4.1a5.8 5.8 0 0 0 6.3-2.5 6.3 6.3 0 0 0 .5-5.8 5 5 0 0 1 .8-.5l1.3-.8a10.5 10.5 0 0 1 4.5-1c3.2.4 3.9 2.4 3.7 3.3a2.2 2.2 0 0 1-1 1.4l-.3.3c0 .2.2.2.4.1a2.5 2.5 0 0 0 1.7-2.2c.1-2-1.8-4.2-5.2-4.2a7.8 7.8 0 0 0-2.9.6l-.4.2Zm-4.9 7.8c-1 1.2-2.5 1.7-3.2 1.3-.7-.4-.4-2.2 1-3.4a17.2 17.2 0 0 1 2.5-1.9l.6-.4.3-.1a4.7 4.7 0 0 1-1.2 4.5Z'
      }
      fill={'#cd6799'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SassIcon = memo(ForwardRef)
