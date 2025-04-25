/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropDownIcon(props: DropDownIconProps) {
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
          "M12.364 12.95L17.314 8l1.414 1.414-6.364 6.364L6 9.414 7.414 8l4.95 4.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DropDownIcon;
/* prettier-ignore-end */
