import { ButtonNavProps } from "./ButtonNav.props";
import styles from "./ButtonNav.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

export default function ButtonNav({
  children,
  counter,
  ...props
}: ButtonNavProps): JSX.Element {
  const cartCounter = useSelector((state: AppState) => state.cartSlice.counter);
  return (
    <div className={styles.wrapper_button}>
      <button
        className={clsx(styles.button, {
          [styles.button_cart]: counter,
        })}
        {...props}
      >
        {children}
      </button>
      {counter && cartCounter > 0 && (
        <div className={styles.cart_counter}>{cartCounter}</div>
      )}
    </div>
  );
}
