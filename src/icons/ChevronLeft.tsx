import React from "react";

export default function ChevronLeft({...rest}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke=" #9EA0B7"
      strokeWidth={2}
      width={12}
      height={12}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
