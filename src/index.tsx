import React from "react";
import { ReactNode } from "react"
export declare type TOptions<T> = T;
export declare interface Props {
  children?: TOptions<ReactNode>;
  imgUrl: TOptions<string>;
  attatchment?: TOptions<"bg-fixed" | "bg-scroll" | "bg-local">;
  position?: TOptions<"bg-bottom" | "bg-top" | "bg-left" | "bg-right" | "bg-center">;
  repeat?: TOptions<"bg-repeat" | "bg-no-repeat">;
  size?: TOptions<"bg-cover" | "bg-contain" | "bg-auto">;
}

export declare type BG = ({ imgUrl, children, attatchment, position, repeat, size }: Props) => JSX.Element;

export const BackGroundImage: BG = ({ imgUrl, children, attatchment = "bg-fixed", position = "bg-top", repeat = "bg-no-repeat", size = "bg-cover" }: Props) => {
  let isFullScreenHeigth = "h-screen";
  if (children) isFullScreenHeigth = '';
  return (
    <div className={`${isFullScreenHeigth} ${attatchment} ${position} ${size} ${repeat}`} style={{ backgroundImage: `url("${imgUrl}")` }}>
      {children}
    </div>
  )
}
