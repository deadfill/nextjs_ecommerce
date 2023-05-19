
import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface MenuProps {
    route: string,
    name: string,
    icon: ReactElement<SVGElement>
    counter?: boolean,
}