import styles from "./FooterInfo.module.css";
import Link from "next/link";
import Image from "next/image";

export default function FooterInfo(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.social}>
        <li>
          <Link href={"/"}>
            Ссылка на форму обратной связи со службой контроля качества
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src={"/icon/footerIcon/vk.svg"}
              alt={""}
              width={28}
              height={28}
            ></Image>
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>
            <Image
              src={"/icon/footerIcon/telegram.svg"}
              alt={""}
              width={28}
              height={28}
            ></Image>
          </Link>
        </li>
      </ul>
      <div className={styles.line}></div>
    </div>
  );
}
