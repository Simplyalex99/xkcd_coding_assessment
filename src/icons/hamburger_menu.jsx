import React from "react";

export const HamburgerMenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <line
        x1="88"
        y1="152"
        x2="424"
        y2="152"
        style={{
          fill: "none",
          stroke: "#FFF",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "48px",
        }}
      />
      <line
        x1="88"
        y1="256"
        x2="424"
        y2="256"
        style={{
          fill: "none",
          stroke: "#FFF",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "48px",
        }}
      />
      <line
        x1="88"
        y1="360"
        x2="424"
        y2="360"
        style={{
          fill: "none",
          stroke: "#FFF",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "48px",
        }}
      />
    </svg>
  );
};
