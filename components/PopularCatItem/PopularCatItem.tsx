import { PopularCatItemProps } from "./PopularCatItem.props";
import styles from "./PopularCatItem.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PopularCatItem({
  name,
  icon,
  path,
  ...props
}: PopularCatItemProps): JSX.Element {
  return (
    <Link href={path} className={styles.wrapper}>
      <div {...props} className={styles.itemPopular}>
        <div className={styles.imgWrapper}>
          <Image width={80} height={80} src={icon} alt={""} />
        </div>
        <p className={styles.text}>{name}</p>
      </div>
    </Link>
  );
}
