import { useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { AppState } from "@/redux/store";

export default function CartItem(): JSX.Element {
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);
  const render = cartItems.map((item) => {
    return (
      <li>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.descriptions}</div>
      </li>
    );
  });

  return <ul className={styles.wrapper}>{render}</ul>;
}
