import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'white'}
    ref={ref}
    viewBox={'0 0 50 50'}
    width={50}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M17.8 46.8A2 2 0 0 0 19 45v-6h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.5 0 3.8-.1 4.6-.6 1-1.3 2.2-2.4 3.6-2.4-5.7-.2-9.3-2-11-5-3.6 0-6.8.4-8.7.7l-.1-1c1.8-.3 4.8-.6 8.3-.7l-.2-.8c-3.6-.2-6.6 0-8.2 0v-1c1.6 0 4.5-.2 8 0l-.2-1.6c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1a14.8 14.8 0 0 1 11.3 0c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6a7.7 7.7 0 0 1 1.6 5l-.1 1.4a66 66 0 0 1 8.2.1v1c-1.7-.1-4.8-.3-8.4 0l-.3.9c3.5 0 6.6.4 8.5.7l-.1 1a61 61 0 0 0-9-.7c-1.6 2.9-5.1 4.8-10.7 5 2.6 0 5 3.9 5 6.6V45a2 2 0 0 0 1.2 1.8 23 23 0 1 0-14.4 0z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const GitHubIcon = memo(ForwardRef)
