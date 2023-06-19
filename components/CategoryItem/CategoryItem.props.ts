import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CategoryItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    icon: string
    path: string
 }