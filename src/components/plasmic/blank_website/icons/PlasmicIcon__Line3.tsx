/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line3Icon(props: Line3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".3"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        d={"M1440 .25H0"}
      ></path>
    </svg>
  );
}

export default Line3Icon;
/* prettier-ignore-end */
