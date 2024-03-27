import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    clipRule={'evenodd'}
    fillRule={'evenodd'}
    imageRendering={'optimizeQuality'}
    ref={ref}
    shapeRendering={'geometricPrecision'}
    textRendering={'geometricPrecision'}
    viewBox={'0 0 846.7 846.7'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M30.9 111h784.9c11.4 0 20.6 9.3 20.6 20.7V715c0 11.4-9.2 20.6-20.6 20.6h-785A20.6 20.6 0 0 1 10.3 715V131.7c0-11.4 9.3-20.6 20.7-20.6zm146 288.2c0 27.2-41.3 27.2-41.3 0 0-32.5 15.2-63 40.7-82.9a78.5 78.5 0 0 1-14.6-45.7A78.9 78.9 0 1 1 305 316.3a105 105 0 0 1 40.7 83c0 27-41.3 27-41.3 0a63.4 63.4 0 0 0-33.2-56 79 79 0 0 1-61 0 63.4 63.4 0 0 0-33.2 56zm-55.1 92h237.6c11.4 0 20.7 9.3 20.7 20.7v122.4c0 11.4-9.3 20.6-20.7 20.6H121.8a20.6 20.6 0 0 1-20.6-20.6V511.9c0-11.4 9.2-20.7 20.6-20.7zm217 41.3H142.4v81.1h196.4v-81.1zM240.6 233a37.6 37.6 0 1 0 0 75.2 37.6 37.6 0 0 0 0-75.2zm183.6 29.1c-27.1 0-27.1-41.2 0-41.2H725c27.1 0 27.1 41.2 0 41.2H424.2zM471 625.8c-27.1 0-27.1-41.3 0-41.3h254c27.1 0 27.1 41.3 0 41.3H471zm-46.8-272.7c-27.1 0-27.1-41.3 0-41.3H725c27.1 0 27.1 41.3 0 41.3H424.2zM471 444c-27.1 0-27.1-41.3 0-41.3h254c27.1 0 27.1 41.3 0 41.3H471zm0 90.9c-27.1 0-27.1-41.3 0-41.3h254c27.1 0 27.1 41.3 0 41.3H471zm324.1-382.6H51.5v542h743.6v-542z'
      }
      fillRule={'nonzero'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CvIcon = memo(ForwardRef)
