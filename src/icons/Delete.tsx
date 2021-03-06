import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.95 7.579v.05h.933v10.687c0 .726.301 1.421.836 1.934.534.512 1.26.8 2.014.8h6.534c.755 0 1.48-.288 2.014-.8a2.68 2.68 0 0 0 .836-1.934V7.629h.933V5.395a.55.55 0 0 0-.55-.55h-3.68l-.774-.742a.55.55 0 0 0-.38-.153h-3.332a.55.55 0 0 0-.38.153l-.774.742H5.5a.55.55 0 0 0-.55.55v2.184Zm9.349-1.753.014.013h3.704v.795H5.983V5.84h3.704l.014-.013.92-.881h2.759l.919.88ZM8.733 9.318h-.05V18.366h1.034V9.318H8.733Zm5.6 0h-.05V18.366h1.034V9.318H14.333Zm-7.416 8.998V7.629h10.166v10.687c0 .46-.19.903-.531 1.229-.34.326-.803.51-1.285.51H8.733c-.482 0-.944-.183-1.285-.51a1.703 1.703 0 0 1-.531-1.23Z"
      fill="#FF8585"
      stroke="#FF8585"
      strokeWidth={0.1}
    />
  </svg>
);

export default SvgDelete;
