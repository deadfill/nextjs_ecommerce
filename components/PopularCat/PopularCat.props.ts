import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PopularCatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
 }

 export interface PopularCatItemProps {
    name: string;
    icon: string;
    path: string;
  }
  