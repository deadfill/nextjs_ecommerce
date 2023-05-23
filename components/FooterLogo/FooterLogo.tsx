import styles from "./FooterLogo.module.css";
import Logo from "../../public/footerLogo.svg";
import Link from "next/link";

export default function FooterLogo(): JSX.Element {
  const text = [
    "Оптовая продажа запчастей на все виды автотранспортных средств",
    "ИП Хомченко Максим Альбертович ОГРНИП 000000000",
    "1993 - 2022 © АвтоЭлектрика",
    "Политика конфиденциальности",
  ];

  return (
    <ul className={styles.footerLogo}>
      <Link href={"/"}>
        <Logo />
      </Link>
      {text.map((text, id) => (
        <li key={id} className={styles.item}>
          {text}
        </li>
      ))}
    </ul>
  );
}
