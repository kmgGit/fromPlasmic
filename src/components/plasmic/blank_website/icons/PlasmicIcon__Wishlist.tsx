/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WishlistIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WishlistIcon(props: WishlistIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 7c-2.761 0-5 2.216-5 4.95 0 2.207.875 7.445 9.488 12.74a.985.985 0 001.024 0C25.125 19.395 26 14.157 26 11.95 26 9.216 23.761 7 21 7s-5 3-5 3-2.239-3-5-3z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WishlistIcon;
/* prettier-ignore-end */
