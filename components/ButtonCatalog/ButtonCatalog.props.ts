import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonCatalogProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
 }