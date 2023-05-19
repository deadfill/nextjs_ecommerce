import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
 }

 export interface NewsItem {
    name: string;
    icon: string;
    path: string;
    date: string;
  }
  