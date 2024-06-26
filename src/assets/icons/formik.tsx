import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox={'0 0 34.7 34.7'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M0 0h34.7v34.7H0z'} fill={'#0051cd'} />
    <path
      d={
        'm20.9.6 3.9 2.2-15.3 8.8-3.9-2.3zM25 3.3 9.7 12v4.4l15.1-8.7zm-6.2 8.6-9 5.2v4.4l9-5.2zm-3.4 6.9-5.6 3.3v4.4l5.6-3.2zm-10-9L9.3 12v4.4l-4-2.2zm0 5L9.2 17v4.4l-3.8-2.2zm0 5 3.8 2.3v4.7l-3.8-2.3zM14 34.2l-4-2.3 15.1-8.7 3.9 2.3zm-4.2-2.7 15.1-8.7v-4.4L9.8 27.1zm6.1-8.5 9-5.3v-4.4l-9 5.2zm3.4-7 5.6-3.2V8.3l-5.6 3.3zm10 9-3.9-2.2v-4.4l4 2.3zm0-5-3.8-2.2v-4.4l3.8 2.2zm0-5-3.8-2.2V8l3.8 2.2z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const FormikIcon = memo(ForwardRef)
