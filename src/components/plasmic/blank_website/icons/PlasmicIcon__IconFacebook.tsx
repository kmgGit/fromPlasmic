/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFacebookIcon(props: IconFacebookIconProps) {
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
          "M13 10h4.5l-.5 2h-4v9h-2v-9H7v-2h4V8.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512C13.698 3.186 14.345 3 16.128 3c.522 0 .98.05 1.372.15V5h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFacebookIcon;
/* prettier-ignore-end */
