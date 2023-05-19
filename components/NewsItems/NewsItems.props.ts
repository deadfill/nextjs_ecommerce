import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NewsItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    icon: string
    path: string
    date: string
 }