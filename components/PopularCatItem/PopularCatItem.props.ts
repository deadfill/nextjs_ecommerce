import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PopularCatItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    icon: string
    path: string
 }