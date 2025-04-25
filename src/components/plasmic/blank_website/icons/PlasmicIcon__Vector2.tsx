/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.262 1c-.068.137-.135.27-.205.405-.04.077-.034.174-.076.252-.045.082-.107.105-.11.218-.003.069 0 .139 0 .208 0 .358.03.721-.14 1.033-.041.077-.049.187-.073.271-.02.075-.088.154-.096.224-.013.11-.138.28-.18.39-.042.106-.027.121-.1.21-.073.09-.15.184-.218.278-.08.112-.062.3-.062.433"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
