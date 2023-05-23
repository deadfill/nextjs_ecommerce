import styles from "./FooterInfo.module.css";
import Vk from "../../public/icon/footerIcon/vk.svg";
import Tg from "../../public/icon/footerIcon/telegram.svg";
import Link from "next/link";

export default function FooterInfo(): JSX.Element {
  return (
    <div>
      <div className={styles.flex}>
        <Link href={"/"}>
          Ссылка на форму обратной связи со службой контроля качества
        </Link>
        <Link href={"/"}>
          <Vk></Vk>
        </Link>
        <Link href={"/"}>
          <Tg></Tg>
        </Link>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
