import { FooterProps, FooterItem } from "./FooterNav.props";
import styles from "./FooterNav.module.css";
import Link from "next/link";

const defaultItems: FooterItem[] = [
  {
    title: "О компании",
    items: [
      { text: "Документы и реквизиты", route: "/about/documents" },
      { text: "Бренды", route: "/about/brands" },
      { text: "Сотрудники", route: "/about/employees" },
      { text: "Контакты", route: "/about/contacts" },
      { text: "Карьера", route: "/about/career" },
    ],
  },
  {
    title: "Клиентам",
    items: [
      { text: "Новости", route: "/clients/news" },
      { text: "Как зарегистрироваться", route: "/clients/registration" },
      { text: "Как сделать заказ", route: "/clients/order" },
      { text: "Способы оплаты", route: "/clients/payment" },
      { text: "Гарантии возврата", route: "/clients/returns" },
      { text: "Вопросы и ответы", route: "/clients/faq" },
      { text: "Доставка и склад", route: "/clients/shipping" },
    ],
  },
  {
    title: "Сотрудничество",
    items: [
      { text: "Партнеры", route: "/cooperation/partners" },
      { text: "Условия сотрудничества", route: "/cooperation/terms" },
      { text: "Программа лояльности", route: "/cooperation/loyalty" },
    ],
  },
];

export default function Footer({ items = defaultItems, ...props }: FooterProps): JSX.Element {
  const buildFooter = items.map(({ title, items }) => (
      <ul key={title}>
        {title}
        {items.map(({ text, route }, id) => (
        <li key={id} className={styles.item}>
          <Link href={route}>
            {text}
          </Link>
        </li>
      ))}
      </ul>
  ));

  return (
<>
  {buildFooter}
</>

  );
}
