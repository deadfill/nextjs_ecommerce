import { MenuBurgerProps } from "./MenuBurger.props";
import styles from "./MenuBurger.module.css";
import clsx from "clsx";
import { useState } from "react";
import ButtonCatalog from "../ButtonCatalog/ButtonCatalog";
import MenuIcon from "../../public/icon/catalogIcon/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setClose, setMenuLevel } from "../../redux/slices/menuSlice";

const menuItem = [
  {
    name: "Автоэлектрика",
    icon: <MenuIcon />,
    children: [
      {
        name: "Стеклоочистители и комплектующие",
        children: [
          { name: "Стеклоочистители" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
  {
    name: "Aimpuls",
    children: [
      {
        name: "123",
        children: [
          { name: "456" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
  { name: "Новинки" },
  {
    name: "Автозапчасти к технике",
    children: [
      {
        name: "Стеклоочистители и комплектующие",
        children: [
          { name: "Стеклоочистители" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
  {
    name: "Комплектующие",
    children: [
      {
        name: "Стеклоочистители и комплектующие",
        children: [
          { name: "Стеклоочистители" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
];

export default function MenuBurger({
  children,
  ...props
}: MenuBurgerProps): JSX.Element {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.menuSlice.opened);
  const level = useSelector((state: AppState) => state.menuSlice.menuLevel);
  const [menuLevel2, setMenuLevel2] = useState([]);
  const [render, setRender] = useState(false);
  const [title, setTitle] = useState("");

  const closeMenu = () => {
    dispatch(setClose()), dispatch(setMenuLevel(1));
  };

  const menuLevel = (item: any) => {
    dispatch(setMenuLevel(2));
    setRender(true);
    setTitle(item.name);
    if (item.children) {
      setMenuLevel2(item.children);
    }
  };

  return (
    <nav className={styles.nav} {...props}>
      <div
        onClick={closeMenu}
        className={clsx(styles.cover, {
          [styles.coverShow]: open,
        })}
      />
      <div
        className={clsx(styles.menu, {
          [styles.menuShow]: open,
        })}
      >
        {menuItem.map((item, i) => {
          return (
            <ButtonCatalog key={i} onClick={() => menuLevel(item)}>
              {item.icon}
              {item.name}
            </ButtonCatalog>
          );
        })}
      </div>
      <div
        className={clsx(styles.menuLevel2, {
          [styles.menuLevel2Show]: level === 2 && open,
        })}
      >
        <h3 className={styles.htag}>{title}</h3>
        {render
          ? menuLevel2.map((item: any, i) => {
              return <button key={i}>{item.name}</button>;
            })
          : null}
      </div>
    </nav>
  );
}
