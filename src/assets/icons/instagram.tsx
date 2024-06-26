import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={50}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <circle cx={24} cy={24} fill={'#C13584'} r={20} />
    <path
      d={
        'M24 14.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.23.42.56.21.96.47 1.38.9.42.41.68.81.9 1.37.16.43.35 1.06.4 2.23.07 1.27.08 1.65.08 4.85 0 3.2-.01 3.58-.07 4.85a6.64 6.64 0 0 1-.42 2.23c-.21.56-.47.96-.9 1.38-.41.42-.81.68-1.37.9-.43.16-1.06.35-2.23.4a70.2 70.2 0 0 1-4.85.08c-3.2 0-3.58-.01-4.85-.07a6.64 6.64 0 0 1-2.23-.42 3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.37 6.64 6.64 0 0 1-.4-2.23 83.34 83.34 0 0 1-.08-4.85c0-3.2.01-3.58.07-4.85.06-1.17.25-1.8.42-2.23.21-.56.47-.96.9-1.38.41-.42.81-.68 1.37-.9a6.64 6.64 0 0 1 2.23-.4 70.2 70.2 0 0 1 4.85-.08ZM24 12c-3.26 0-3.67.01-4.95.07a8.8 8.8 0 0 0-2.91.56 5.9 5.9 0 0 0-2.13 1.38 5.88 5.88 0 0 0-1.38 2.13 8.8 8.8 0 0 0-.56 2.91A85.13 85.13 0 0 0 12 24c0 3.26.01 3.67.07 4.95a8.8 8.8 0 0 0 .56 2.91c.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07a8.8 8.8 0 0 0 2.91-.56 5.9 5.9 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95a8.8 8.8 0 0 0-.56-2.91 5.88 5.88 0 0 0-1.38-2.13 5.88 5.88 0 0 0-2.13-1.38 8.8 8.8 0 0 0-2.91-.56A85.13 85.13 0 0 0 24 12Z'
      }
      fill={'#fff'}
    />
    <path
      d={
        'M24 17.84a6.16 6.16 0 1 0 0 12.33 6.16 6.16 0 0 0 0-12.33Zm0 10.17a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const InstagramIcon = memo(ForwardRef)
