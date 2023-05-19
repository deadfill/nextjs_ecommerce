import { ButtonMenuProps } from "./ButtonMenu.props";
import styles from "./ButtonMenu.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setClose, setOpen, setMenuLevel } from "../../redux/slices/menuSlice";

export default function ButtonMenu({
  className,
  appearance,
  children,
  ...props
}: ButtonMenuProps): JSX.Element {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.menuSlice.opened);
  const dynamicRoute = useRouter().asPath;

  const closeMenu = () => {
    dispatch(setClose());
  };

  useEffect(() => closeMenu(), [dynamicRoute]);

  const toogleMenu = () => {
    if (open) {
      dispatch(setClose());
    } else {
      dispatch(setOpen());
      dispatch(setMenuLevel(1));
    }
  };

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <>
      <button
        className={clsx(styles.button, className, {
          [styles.primary]: appearance === "primary",
          [styles.ghost]: appearance === "ghost",
          [styles.button_active]: open,
        })}
        {...props}
        onClick={() => toogleMenu()}
      >
        <div className={styles.span}>
          <span
            className={clsx(styles.button_top, {
              [styles.ghost_span]: appearance === "ghost",
              [styles.opened_top]: open,
            })}
          ></span>
          <span
            className={clsx(styles.button_mid, {
              [styles.ghost_span]: appearance === "ghost",
              [styles.opened_mid]: open,
            })}
          ></span>
          <span
            className={clsx(styles.button_bot, {
              [styles.ghost_span]: appearance === "ghost",
              [styles.opened_bot]: open,
            })}
          ></span>
        </div>
        {children}
      </button>
    </>
  );
}
