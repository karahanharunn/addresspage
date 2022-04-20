import * as React from "react"
import { SVGProps } from "react"

const SvgImport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 13.461V19H1v-5.539m8 1.385V1m0 13.846 5.333-5.538M9 14.846 3.667 9.308"
      stroke="#8087ED"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgImport
