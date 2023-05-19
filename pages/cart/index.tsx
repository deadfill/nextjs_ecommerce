import { AppState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import NotCartItem from "@/components/NotCartItem/NotCartItem";
import CartItem from "@/components/CartItem/CartItem";

export default function Help(): JSX.Element {
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);

  return (
    <div>
      <h2 className={styles.cart_htag}>Корзина</h2>
      {cartItems.length != 0 ? <CartItem /> : <NotCartItem />}
    </div>
  );
}
