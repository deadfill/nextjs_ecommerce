import { NewsItemsProps } from "./NewsItems.props";
import styles from "./NewsItems.module.css";
import Image from "next/image";
import Link from "next/link";
import DateIcon from "../../public/icon/dateIcon.svg";

export default function NewsItems({
  name,
  icon,
  path,
  date,
  ...props
}: NewsItemsProps): JSX.Element {
  return (
    <Link href={path} className={styles.wrapper}>
      <div {...props} className={styles.newsImgWrapper}>
        <span className={styles.spanNews}>Новость</span>
        <Image className={styles.newsImage} src={icon} alt={""} fill />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.textNews}>{name}</p>
      </div>
      <div className={styles.dateWrapper}>
        <DateIcon />
        <p className={styles.dateNews}>{date}</p>
      </div>
    </Link>
  );
}
