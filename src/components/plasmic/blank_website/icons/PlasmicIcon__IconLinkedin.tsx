/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinkedinIcon(props: IconLinkedinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.5 9.05c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 015.5 5.5v7.5h-2V13a3.5 3.5 0 10-7 0v7.5h-2V8h2v1.05zM4.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2v12.5h-2V8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinkedinIcon;
/* prettier-ignore-end */
