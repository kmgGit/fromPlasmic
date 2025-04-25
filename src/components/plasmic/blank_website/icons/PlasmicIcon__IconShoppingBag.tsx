/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconShoppingBagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconShoppingBagIcon(props: IconShoppingBagIconProps) {
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
          "M11.667 11.667V8.333A5 5 0 0120 4.607a5 5 0 018.333 3.726v3.334h2.5a2.5 2.5 0 012.5 2.5v16.675a5.825 5.825 0 01-5.825 5.825H13.333A6.666 6.666 0 016.667 30V14.167a2.5 2.5 0 012.5-2.5h2.5zm11.058 22.5a5.8 5.8 0 01-1.042-3.325V14.167H9.167V30a4.166 4.166 0 004.166 4.167h9.392zm-3.558-22.5V8.333a2.5 2.5 0 10-5 0v3.334h5zm2.5 0h4.166V8.333a2.5 2.5 0 00-4.426-1.593 5 5 0 01.26 1.593v3.334zm2.516 19.175a3.325 3.325 0 006.65 0V14.167h-6.65v16.675z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconShoppingBagIcon;
/* prettier-ignore-end */
