import styles from "./Navbar.module.css";
import Link from "next/link";
import { MenuProps, NavbarProps } from "./Navbar.prop";
import ButtonNav from "../ButtonNav/ButtonNav";
import CartSvg from "../../public/icon/headerIcon/cart.svg";
import FavSvg from "../../public/icon/headerIcon/favSvg.svg";
import UserSvg from "../../public/icon/headerIcon/userSvg.svg";
import clsx from "clsx";

const menuItem: MenuProps[] = [
  {
    route: "/cart",
    name: "Корзина",
    icon: <CartSvg />,
    counter: true,
  },
  {
    route: "/favorite",
    name: "Избраное",
    icon: <FavSvg />,
  },
  {
    route: "/help",
    name: "Профиль",
    icon: <UserSvg />,
  },
];

export default function Navbar({
  className,
  ...props
}: NavbarProps): JSX.Element {
  const buildMenu = menuItem.map(({ route, name, icon, counter }, id) => {
    return (
      <li className={styles.li} key={id}>
        <Link href={`${route}`}>
          <ButtonNav counter={counter}>
            {icon}
            {name}
          </ButtonNav>
        </Link>
      </li>
    );
  });

  return (
    <nav className={clsx(className)} {...props}>
      <ul className={styles.wrapper}>{buildMenu}</ul>
    </nav>
  );
}
