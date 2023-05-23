import { MenuBurgerProps } from "./MenuBurger.props";
import styles from "./MenuBurger.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ButtonCatalog from "../ButtonCatalog/ButtonCatalog";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setClose, setMenuLevel } from "../../redux/slices/menuSlice";
import { useRouter } from "next/router";

export default function MenuBurger({ ...props }: MenuBurgerProps): JSX.Element {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.menuSlice.opened);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const route = useRouter();

  useEffect(() => {
    fetch("/api/getAllCategory")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const closeMenu = () => {
    dispatch(setClose()), dispatch(setMenuLevel(1));
  };

  const menuLevel = (item: any) => {
    route.push(`/products/${item}`);
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
        {category.map((item, i) => {
          return (
            <ButtonCatalog key={i} onClick={() => menuLevel(item)}>
              {item}
            </ButtonCatalog>
          );
        })}
      </div>
    </nav>
  );
}
