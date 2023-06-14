import { AppState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import NotCartItem from "@/components/NotCartItem/NotCartItem";
import CartItem from "@/components/CartItem/CartItem";
import Link from "next/link";

export default function Help(): JSX.Element {
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);
  const totalPrice = useSelector((state: AppState) => state.cartSlice.price);

  const totalCount = cartItems.reduce((total, item) => total + item.count, 0);

  if (cartItems.length == 0) {
    return <NotCartItem />;
  }

  const render = cartItems.map((item) => {
    return <CartItem data={item} />;
  });

  return (
    <div>
      <h2 className={styles.cart_htag}>Корзина</h2>
      <div className={styles.index_wrapper}>
        <div className={styles.wrapper}>
          <ul>{render}</ul>
          <button className={styles.offer_button}>Оформить заказ</button>
        </div>
        <div className={styles.wrapper_info}>
          <div className={styles.info_price}>
            <div className={styles.info_left}>
              <h2>Итого</h2>
              <p>Количество</p>
            </div>
            <div className={styles.info_right}>
              <h2>{totalPrice} ₽</h2>
              <p className={styles.count}>{totalCount} шт</p>
            </div>
          </div>
          <div className={styles.info_profile}>
            <p>Профиль покупателя:</p>
            <Link className={styles.link} href={"/"}>
              Войти или зарегистрироваться
            </Link>
          </div>
          <div className={styles.info_org}>
            <p className={styles.orange}>Организация</p>
            <p>Нет данных</p>
          </div>
          <div className={styles.info_pay}>
            <p className={styles.orange}>Способ оплаты</p>
            <p>Оплата по счёту (безналичный)</p>
            <p>
              Cчёт будет отправлен менеджером компании после согласования
              заказа.
            </p>
          </div>
          <div className={styles.info_delivery}>
            <p className={styles.orange}>Доставка</p>
            <p>Нет данных</p>
          </div>
        </div>
      </div>
    </div>
  );
}
