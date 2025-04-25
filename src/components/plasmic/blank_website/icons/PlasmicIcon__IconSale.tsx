/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSaleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSaleIcon(props: IconSaleIconProps) {
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

      <path
        d={
          "M20 37.273c9.54 0 17.273-7.734 17.273-17.273 0-9.54-7.734-17.273-17.273-17.273C10.46 2.727 2.727 10.46 2.727 20S10.46 37.273 20 37.273z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M25.09 14.547a3.635 3.635 0 00-3.272-1.818h-3.636a3.637 3.637 0 00-2.571 6.206A3.637 3.637 0 0018.18 20h3.637a3.637 3.637 0 012.572 6.206 3.637 3.637 0 01-2.572 1.065h-3.636a3.637 3.637 0 01-3.273-1.818M20 8.182v3.94m0 15.757v3.94"
        }
        stroke={"currentColor"}
        strokeWidth={"2.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconSaleIcon;
/* prettier-ignore-end */
