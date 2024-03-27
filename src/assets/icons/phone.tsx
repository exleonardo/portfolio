import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={25}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={25}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} />
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M22 20a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-14.6-9.2 19.8 19.8 0 0 1-3-8.6 2 2 0 0 1 .4-1.6l.7-.4c.3-.2.5-.2.8-.2h3c.5 0 1 .2 1.3.5.4.3.6.7.7 1.2.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.2 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 9 9 0 0 0 2.8.8c.5 0 .9.3 1.2.7.3.3.5.8.5 1.3v3Z'
        }
        stroke={'#959595'}
        strokeLinejoin={'round'}
        strokeWidth={2}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PhoneIcon = memo(ForwardRef)
