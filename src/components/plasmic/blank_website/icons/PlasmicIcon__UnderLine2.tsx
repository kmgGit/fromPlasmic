/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnderLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnderLine2Icon(props: UnderLine2IconProps) {
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

      <g opacity={".5"}>
        <path opacity={".4"} stroke={"currentColor"} d={"M0 .5h1440"}></path>
      </g>
    </svg>
  );
}

export default UnderLine2Icon;
/* prettier-ignore-end */
