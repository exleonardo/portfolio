import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox={'0 0 256 256'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <linearGradient id={'a'} x1={'62.1%'} x2={'108.2%'} y1={'0%'} y2={'37.9%'}>
        <stop offset={'0%'} stopColor={'#4285EB'} />
        <stop offset={'100%'} stopColor={'#2EC7FF'} />
      </linearGradient>
      <linearGradient id={'b'} x1={'69.6%'} x2={'54%'} y1={'0%'} y2={'108.5%'}>
        <stop offset={'0%'} stopColor={'#29CDFF'} />
        <stop offset={'37.9%'} stopColor={'#148EFF'} />
        <stop offset={'100%'} stopColor={'#0A60FF'} />
      </linearGradient>
      <linearGradient id={'c'} x1={'69.7%'} x2={'16.7%'} y1={'-13%'} y2={'117.4%'}>
        <stop offset={'0%'} stopColor={'#FA816E'} />
        <stop offset={'41.5%'} stopColor={'#F74A5C'} />
        <stop offset={'100%'} stopColor={'#F51D2C'} />
      </linearGradient>
      <linearGradient id={'d'} x1={'68.1%'} x2={'30.4%'} y1={'-35.7%'} y2={'114.9%'}>
        <stop offset={'0%'} stopColor={'#FA8E7D'} />
        <stop offset={'51.3%'} stopColor={'#F74A5C'} />
        <stop offset={'100%'} stopColor={'#F51D2C'} />
      </linearGradient>
    </defs>
    <g fill={'none'}>
      <path
        d={
          'M116.9 4.5 4.5 116.8c-6 6-6 15.8 0 21.8L117 250.8c6 6 15.7 6 21.8 0l47-47a13.8 13.8 0 1 0-19.5-19.6l-35.7 35.7a3.7 3.7 0 0 1-5.3 0l-89.7-89.7a3.7 3.7 0 0 1 0-5.2l89.7-89.7a3.7 3.7 0 0 1 5.3 0L166.2 71a13.9 13.9 0 0 0 19.6-19.6l-47.1-47c-6-6-15.8-5.9-21.8.1Z'
        }
        fill={'url(#a)'}
      />
      <path
        d={
          'M116.9 4.5 4.5 116.8c-6 6-6 15.8 0 21.8L117 250.8c6 6 15.7 6 21.8 0l47-47a13.8 13.8 0 1 0-19.5-19.6l-35.7 35.7a3.7 3.7 0 0 1-5.3 0l-89.7-89.7a3.7 3.7 0 0 1 0-5.2l89.7-89.7c3.7-3.2 9.9-9.7 18.8-11.3 6.7-1 14 1.4 21.9 7.5L138.7 4.4c-6-6-15.8-5.9-21.8.1Z'
        }
        fill={'url(#b)'}
      />
      <path
        d={
          'M196.6 173.8a13.9 13.9 0 0 0 19.6 0L251 139c6-6 6-15.7 0-21.8l-35-34.9a13.9 13.9 0 0 0-19.7 19.6l23.7 23.7a3.7 3.7 0 0 1 0 5.3l-23.4 23.3a13.8 13.8 0 0 0 0 19.6Z'
        }
        fill={'url(#c)'}
      />
      <circle cx={128.3} cy={128.2} fill={'url(#d)'} r={30.3} />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const AntDesignIcon = memo(ForwardRef)
