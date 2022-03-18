import React from "react";

function BrandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5 -5 45 45"
      height={35}
      className=""
      style={{ margin: "auto" }}
    >
      <path
        fill="#194c75"
        d="M27.909 3h-3.455l1.633 2.535H3.906v4.018h28.196l-1.909-2.85z"
        className="gray"
        transform="translate(2.996)"
      ></path>
      <path
        fill="#808184"
        d="M8.099 39h3.455l-1.633-2.535h22.181v-4.018H3.906l1.909 2.85z"
        className="dblue"
        transform="translate(2.996)"
      ></path>
      <path
        fill="#194c75"
        d="M3.906 19.047h21.081v4.018H3.906z"
        className="gray"
        transform="translate(2.996)"
      ></path>
    </svg>
  );
}

export default BrandIcon;
