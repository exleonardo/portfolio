import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    height={25}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={25}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <circle cx={24} cy={24} fill={'#0077B5'} r={20} />
    <path
      clipRule={'evenodd'}
      d={
        'M18.77 14.28c0 1.25-.94 2.26-2.43 2.26-1.42 0-2.37-1.01-2.34-2.26-.03-1.3.92-2.28 2.37-2.28 1.46 0 2.38.98 2.4 2.28Zm-4.65 18.54v-14.5h4.5v14.5h-4.5Zm8.12-9.88c0-1.8-.06-3.35-.12-4.62h3.92l.2 1.98h.1A5.3 5.3 0 0 1 30.8 18c2.97 0 5.19 1.95 5.19 6.22v8.6h-4.5v-8.04c0-1.87-.66-3.14-2.3-3.14-1.24 0-1.98.86-2.27 1.69-.12.3-.18.71-.18 1.13v8.36h-4.5v-9.88h-.01Z'
      }
      fill={'#fff'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const LinkedInIcon = memo(ForwardRef)
