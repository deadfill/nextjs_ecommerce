import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonNavProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    counter?: boolean
 }