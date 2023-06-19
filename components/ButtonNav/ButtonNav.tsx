import { ButtonNavProps } from "./ButtonNav.props";
import styles from "./ButtonNav.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

export default function ButtonNav({
  children,
  counterCart,
  counterFav,
  ...props
}: ButtonNavProps): JSX.Element {
  const cartCounter = useSelector((state: AppState) => state.cartSlice.counter);
  const favCounter = useSelector(
    (state: AppState) => state.favoriteSlice.counter
  );

  return (
    <div className={styles.wrapper_button}>
      <button
        className={clsx(styles.button, {
          [styles.button_cart]: counterCart,
        })}
        {...props}
      >
        {children}
      </button>
      {counterCart && cartCounter > 0 && (
        <div className={styles.cart_counter}>{cartCounter}</div>
      )}
      {counterFav && favCounter > 0 && (
        <div className={styles.cart_counter}>{favCounter}</div>
      )}
    </div>
  );
}
