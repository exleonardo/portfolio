import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    height={50}
    ref={ref}
    viewBox={'0 0 32 32'}
    width={50}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <circle cx={16} cy={16} fill={'url(#a)'} r={14} />
    <path d={'m23 10-1-1-15 6v2h5l7-4c0-1 0 0 0 0l-5 5v2l6 3 1-1 2-12Z'} fill={'#fff'} />
    <defs>
      <linearGradient gradientUnits={'userSpaceOnUse'} id={'a'} x1={16} x2={16} y1={2} y2={30}>
        <stop stopColor={'#37BBFE'} />
        <stop offset={1} stopColor={'#007DBB'} />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TelegramIcon = memo(ForwardRef)
