import * as React from "react";
import { SVGProps } from "react";

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.667 13A.667.667 0 1 1 20 13v7.333a.666.666 0 0 1-.667.667H4.667A.666.666 0 0 1 4 20.333V5.667A.667.667 0 0 1 4.667 5H12a.667.667 0 1 1 0 1.333H5.333v13.334h13.334V13Z"
      fill="#9EA0B7"
    />
    <path
      d="m11.474 13.525 1.116-.16 6.858-6.857a.676.676 0 1 0-.956-.957l-6.86 6.857-.16 1.117h.002Zm8.931-8.932a2.03 2.03 0 0 1 0 2.872l-7.016 7.017a.677.677 0 0 1-.383.192l-2.233.32a.676.676 0 0 1-.766-.767l.32-2.233a.677.677 0 0 1 .19-.383l7.018-7.017a2.03 2.03 0 0 1 2.87 0v-.001Z"
      fill="#9EA0B7"
    />
  </svg>
);

export default SvgCopy;
