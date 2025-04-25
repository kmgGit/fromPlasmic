/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserIcon(props: UserIconProps) {
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
          "M24 27v-2.667c0-1.414-.478-2.77-1.328-3.77C21.822 19.561 20.67 19 19.467 19h-7.934c-1.202 0-2.355.562-3.205 1.562-.85 1-1.328 2.357-1.328 3.771V27m9.5-13a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserIcon;
/* prettier-ignore-end */
