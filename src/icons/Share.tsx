import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" stroke="#797B9C">
      <path
        d="M13.334 10.445v2.889H2.667V2.667h3.098"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.768 3.206a.467.467 0 0 1 0-.934h4.437a.467.467 0 0 1 .467.467m-4.904.467 4.829-.467m-4.83.467H12.078L8.44 6.844a.467.467 0 1 0 .66.66l3.639-3.638m-3.97-.66 3.97.66m.934-1.127h-.075m.075 0h-.075m.075 0v4.435m-.075-4.435v4.435m.075 0h-.075m.075 0a.467.467 0 1 1-.934 0V3.866m.934 3.308h-.075m0 0a.392.392 0 1 1-.784 0l-.075-3.308"
        fill="#797B9C"
        strokeWidth={0.15}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
