import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    preserveAspectRatio={'xMidYMid'}
    ref={ref}
    viewBox={'0 -26 256 256'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M0 110.8V0l96 55.4v37l-64-37v73.9z'} fill={'#00B0FF'} />
    <path d={'M96 55.4 192 0v110.8l-64 37-32-18.5 64-36.9v-37l-64 37z'} fill={'#0081CB'} />
    <path d={'M96 129.3v37l64 36.9v-36.9z'} fill={'#00B0FF'} />
    <path
      d={'m160 203.2 96-55.4V73.9l-32 18.5v37l-64 36.9v37Zm64-147.8v-37L256 0v37l-32 18.4Z'}
      fill={'#0081CB'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const MaterialUiIcon = memo(ForwardRef)
