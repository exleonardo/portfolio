import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    viewBox={'0 0 256 203'}
    xmlns={'http://www.w3.org/2000/svg'}
    xmlnsXlink={'http://www.w3.org/1999/xlink'}
    {...props}
  >
    <defs>
      <filter filterUnits={'objectBoundingBox'} id={'b'} x={'-2.2%'} y={'-2.8%'}>
        <feOffset dx={1} dy={1} in={'SourceAlpha'} result={'shadowOffsetOuter1'} />
        <feGaussianBlur in={'shadowOffsetOuter1'} result={'shadowBlurOuter1'} stdDeviation={2} />
        <feColorMatrix
          in={'shadowBlurOuter1'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0'}
        />
      </filter>
      <path
        d={
          'M200.42 0H53.63L0 53.35l121.76 146.63 9.71-10.9L252 53.86 200.42 0Zm-5.36 12.56 39.84 41.6-112.8 126.56L17 54.16l41.81-41.6h136.25Z'
        }
        id={'a'}
      />
    </defs>
    <path d={'M60.82 14.03h136.27l39.94 41.7-112.99 126.55L18.96 55.72z'} fill={'#18253F'} />
    <path d={'M151.43 152.38H98.01l-24.12-29.53h68.36l.01-4.19h39.07z'} fill={'#274D82'} />
    <path
      d={
        'm225.56 43.83-147.38 85.1-19.23-24.06L173.05 39l-2.09-3.63 30.39-17.54zM146.6 14.07 35.93 77.97 18.72 56.48 92.81 13.7z'
      }
      fill={'#274D82'}
    />
    <g transform={'translate(2 1.51)'}>
      <use filter={'url(#b)'} xlinkHref={'#a'} />
      <use fill={'#3068B7'} xlinkHref={'#a'} />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ZodIcon = memo(ForwardRef)
