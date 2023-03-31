import React from "react";
import { ReactNode } from "react"
type TOptions<T> = { [K in keyof T]: T[K] } | never;
export declare type TAttachment = TOptions<"bg-fixed" | "bg-scroll" | "bg-local">;
export declare type TPosition = TOptions<"bg-bottom" | "bg-top" | "bg-left" | "bg-right" | "bg-center">;
export declare type TRepeat = TOptions<"bg-repeat" | "bg-no-repeat">;
export declare type TSize = TOptions<"bg-cover" | "bg-contain" | "bg-auto">;
interface Props {
  children?: ReactNode;
  imgUrl: string;
  attatchment?: TAttachment;
  position?: TPosition;
  repeat?: TRepeat;
  size?: TSize;
}
type BG = ({ imgUrl, children, attatchment, position, repeat, size }: Props) => JSX.Element;

export const BackGroundImage: BG = ({ imgUrl, children, attatchment = "bg-fixed", position = "bg-top", repeat = "bg-no-repeat", size = "bg-cover" }: Props) => {
  let isFullScreenHeigth = "h-screen";
  if (children) isFullScreenHeigth = '';
  return (
    <div className={`${isFullScreenHeigth} ${attatchment} ${position} ${size} ${repeat}`} style={{ backgroundImage: `url("${imgUrl}")` }}>
      {children}
    </div>
  )
}
