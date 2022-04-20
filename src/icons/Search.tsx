import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.347 18.177 6.094-6.093a6.463 6.463 0 0 0 4.317 1.65 6.499 6.499 0 0 0 6.492-6.492A6.499 6.499 0 0 0 11.758.75a6.499 6.499 0 0 0-6.492 6.492c0 1.657.626 3.17 1.65 4.318L.824 17.653a.25.25 0 0 0 0 .353l.17.17a.25.25 0 0 0 .354 0ZM11.758 1.49c3.17 0 5.75 2.58 5.75 5.75 0 3.171-2.58 5.751-5.75 5.751s-5.75-2.58-5.75-5.75 2.58-5.75 5.75-5.75Z"
      fill="#9EA0B7"
      stroke="#9EA0B7"
      strokeWidth={0.5}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSearch;
