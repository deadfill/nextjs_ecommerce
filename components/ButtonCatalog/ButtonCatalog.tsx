import { ButtonCatalogProps } from "./ButtonCatalog.props";
import styles from "./ButtonCatalog.module.css";
import Icon from "../../public/icon/catalogIcon/menuCatalog.svg";

export default function ButtonCatalog({
  children,
  ...props
}: ButtonCatalogProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.textWrapper}>{children}</div>
      <Icon />
    </button>
  );
}
