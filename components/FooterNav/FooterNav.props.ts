import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items?: FooterItem[];
}

export interface FooterItem {
    title: string;
    items: Array<{ text: string; route: string }>;
}