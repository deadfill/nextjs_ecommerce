import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import Link from "next/link";
import Logo from "/public/footerLogo.svg";
import Image from "next/image";

export default function Footer({ ...props }: FooterProps): JSX.Element {
  return (
    <footer {...props}>
      <div className={styles.wrapper}>
        <ul className={styles.footer}>
          <li className={styles.footerLogo}>
            <Link href={"/"}>
              <Logo />
            </Link>
            <p className={styles.footerText}>
              Оптовая продажа запчастей на все виды автотранспортных средств
            </p>
            <p className={styles.footerText}>
              ИП Хомченко Максим Альбертович ОГРНИП 000000000
            </p>
            <p className={styles.footerText}>1993 - 2022 © АвтоЭлектрика</p>
            <p className={styles.footerText}>Политика конфиденциальности</p>
          </li>
          <li className={styles.footerAbout}>
            <h3 className={styles.footerHead}>О компании</h3>
            <Link className={styles.footerLink} href={"/"}>
              Документы и реквизиты
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Бренды
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Сотрудники
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Контакты
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Карьера
            </Link>
          </li>
          <li className={styles.footerInfo}>
            <h3 className={styles.footerHead}>Клиентам</h3>
            <Link className={styles.footerLink} href={"/"}>
              Новости
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Как зарегестрироваться
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Как сделать заказ
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Способы оплаты
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Гарантии возврата{" "}
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Вопросы и ответы
            </Link>
            <Link className={styles.footerLink} href={"/"}>
              Доставка и склад
            </Link>
          </li>
          <li className={styles.footerSoc}>
            <div className={styles.footerSocIcon}>
              <div className={styles.footerSocHeader}>
                Ссылка на форму обратной связи со службой контроля качества
              </div>
              <Link className={styles.footerSocImg} href={"/"}>
                <Image
                  src={"/icon/footerIcon/vk.svg"}
                  alt={""}
                  width={28}
                  height={28}
                ></Image>
              </Link>
              <Link className={styles.footerSocImg} href={"/"}>
                <Image
                  src={"/icon/footerIcon/telegram.svg"}
                  alt={""}
                  width={28}
                  height={28}
                ></Image>
              </Link>
            </div>
            <div className={styles.footerSocBlock}>
              <h4 className={styles.footerSocHeader}>Время работы</h4>
              <p className={styles.footerSocPara}>пн. - пт. с 7:30 до 18:00</p>
            </div>
            <div className={styles.footerSocBlock}>
              <h4 className={styles.footerSocHeader}>Телефоны:</h4>
              <p className={styles.footerSocPara}> 8 (800) 455-55-15</p>
              <p className={styles.footerSocPara}>+7 (495) 108-54-64</p>
            </div>
            <div className={styles.footerSocBlock}>
              <h4 className={styles.footerSocHeader}>Адрес эл. почты</h4>
              <p className={styles.footerSocPara}>info@auto-e.ru</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
