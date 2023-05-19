import { NotCartItemProps } from "./NotCartItem.props";
import styles from "./NotCartItem.module.css";
import CartIcon from "../../public/icon/productIcon/cartIcon.svg";

export default function NotCartItem({
  ...props
}: NotCartItemProps): JSX.Element {
  return (
    <div className={styles.wrapper_notcart} {...props}>
      <div className={styles.message_notcart}>
        <h3 className={styles.cart_htag}>Ваша корзина пуста</h3>
        <p className={styles.cart_paragraph}>
          Перейдите в каталог продукции или воспользуйтесь поиском, чтобы
          выбрать нужный товар
        </p>
        <button className={styles.button_cart}>
          <CartIcon />
          Перейти в каталог
        </button>
      </div>
    </div>
  );
}
