import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { AppState } from "@/redux/store";
import { deleteProduct } from "@/redux/slices/cartSlice";

export default function CartItem(): JSX.Element {
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);
  const dispatch = useDispatch();

  const deleteCartItem = (id) => {
    dispatch(deleteProduct(id));
  };
  const render = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.descriptions}</div>
        <button onClick={() => deleteCartItem(item)}>Удалить</button>
      </li>
    );
  });

  return <ul className={styles.wrapper}>{render}</ul>;
}
