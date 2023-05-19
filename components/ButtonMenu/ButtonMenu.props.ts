import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonMenuProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost'
 }