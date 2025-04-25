/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCustomerServiceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCustomerServiceIcon(props: IconCustomerServiceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        clipPath={"url(#y6dEtXW6TtTMa)"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M13.333 25a3.333 3.333 0 00-6.666 0v3.333a3.333 3.333 0 106.666 0V25zm20 0a3.333 3.333 0 00-6.666 0v3.333a3.333 3.333 0 106.666 0V25z"
          }
        ></path>

        <path
          d={
            "M6.667 25v-5a13.333 13.333 0 0126.666 0v5M30 31.667c0 1.326-1.054 2.597-2.929 3.535-1.875.938-4.419 1.465-7.071 1.465"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"y6dEtXW6TtTMa"}>
          <path fill={"currentColor"} d={"M0 0h40v40H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconCustomerServiceIcon;
/* prettier-ignore-end */
