/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldTickIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldTickIcon(props: ShieldTickIconProps) {
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
          "M19.983 2.587c1.021 0 2.021.149 2.774.43v.001l8.318 3.117h0c2.22.827 3.976 3.373 3.976 5.732V24.25c0 1.087-.345 2.34-.927 3.499-.546 1.086-1.284 2.053-2.093 2.707l-.163.127-7.167 5.35-.006.004c-1.283.99-2.971 1.496-4.695 1.496-1.723 0-3.415-.507-4.736-1.485h0l-7.165-5.349c-.872-.65-1.674-1.678-2.257-2.84-.582-1.161-.925-2.414-.925-3.493v-12.4c0-2.285 1.646-4.746 3.767-5.649l.207-.082h.001l8.317-3.117c.753-.281 1.752-.43 2.774-.43zm.018 1.499c-.7.001-1.42.084-2.013.263l-.246.082-.001.001-8.317 3.116h0c-.828.312-1.57.975-2.1 1.743-.531.768-.89 1.699-.89 2.592v12.383c0 .895.31 1.923.767 2.835.4.798.936 1.555 1.538 2.086l.262.214 7.167 5.35c1.062.794 2.46 1.174 3.834 1.174 1.288 0 2.6-.335 3.641-1.03l.204-.143.002-.001 7.166-5.35.001-.001c.715-.536 1.35-1.395 1.806-2.306.455-.91.762-1.934.762-2.828v-12.4c0-.885-.36-1.812-.891-2.58-.497-.719-1.179-1.348-1.941-1.688l-.155-.064-.005-.002-8.317-3.117-.009-.003-.248-.08c-.597-.17-1.318-.248-2.017-.246z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>

      <path
        d={
          "M24.404 14.77a.758.758 0 011.06 0 .758.758 0 010 1.06l-7.167 7.167a.737.737 0 01-.53.22.733.733 0 01-.471-.168l-.06-.052-2.683-2.684a.758.758 0 010-1.06.758.758 0 011.06 0l2.153 2.154.355-.354 6.283-6.283z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShieldTickIcon;
/* prettier-ignore-end */
