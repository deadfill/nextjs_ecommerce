import { IProduct } from "@/models/Product";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hit: IProduct
 }

 