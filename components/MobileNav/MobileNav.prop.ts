import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface MobileNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface MobileMenuProps {
    route: string,
    name: string,
    icon: ReactElement<SVGElement>
    counterCart?: boolean,
    counterFav?: boolean,
}