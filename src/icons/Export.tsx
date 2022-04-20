import * as React from "react";
import { SVGProps } from "react";

const SvgExport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 13.461V19H1v-5.539M9 1v13.846M9 1 3.667 6.538M9 1l5.333 5.538"
      stroke="#8087ED"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgExport;
