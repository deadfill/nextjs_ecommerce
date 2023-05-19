import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface MenuBurgerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
 }