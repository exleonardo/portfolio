import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    preserveAspectRatio={'xMidYMid'}
    ref={ref}
    viewBox={'-52.5 0 361 361'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M255.6 70.8 232.3 331l-104.5 29-104.1-29L.4 70.9h255.2Z'} fill={'#E44D26'} />
    <path d={'m128 338 84.4-23.5 19.9-222.4H128V338Z'} fill={'#F16529'} />
    <path
      d={
        'M82.8 156H128v-32H48l.7 8.6 7.8 88H128v-32H85.7L82.8 156Zm7.2 80.5H58l4.4 50.2 65.5 18.1h.1v-33.2h-.1L92.3 262 90 236.5Z'
      }
      fill={'#EBEBEB'}
    />
    <path
      d={
        'M24.2 0h16.2v16h14.9V0h16.2v48.6H55.3V32.3H40.4v16.3H24.2V0Zm68.6 16.1H78.5V0h44.9v16.1H109v32.5H92.8V16ZM130.5 0h16.9l10.4 17 10.4-17h17v48.6H169V24.5l-11.2 17.3h-.3l-11.2-17.3v24h-15.8V0Zm62.7 0h16.2v32.5h22.9v16h-39V0Z'
      }
    />
    <path
      d={
        'M127.9 220.6h39.3l-3.7 41.4-35.6 9.6v33.2l65.5-18.1.4-5.4 7.5-84 .8-8.7H128v32Zm0-64.7H205l.7-7.1 1.4-16.2.8-8.6h-80v31.9Z'
      }
      fill={'#FFF'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const HtmlIcon = memo(ForwardRef)
