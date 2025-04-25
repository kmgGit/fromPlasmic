/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1000005939IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1000005939Icon(props: Group1000005939IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 80"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".3"}
        d={
          "M80 40c0 22.091-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0s40 17.909 40 40zm-69.093 0c0 16.068 13.026 29.093 29.093 29.093 16.068 0 29.093-13.026 29.093-29.093S56.067 10.907 40 10.907 10.907 23.933 10.907 40z"
        }
        fill={"currentColor"}
      ></path>

      <circle cx={"40"} cy={"40"} r={"29"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Group1000005939Icon;
/* prettier-ignore-end */
