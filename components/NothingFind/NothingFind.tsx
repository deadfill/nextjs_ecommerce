import { NotCartItemProps } from "./NothingFind.props";
import styles from "./NothingFind.module.css";

export default function NothingFind({
  ...props
}: NotCartItemProps): JSX.Element {
  return (
    <div className={styles.wrapper_notcart} {...props}>
      <div className={styles.message_notcart}>
        <h3 className={styles.cart_htag}>Ничего не найдено</h3>
        <p className={styles.cart_paragraph}>
          К сожалению, по Вашему запросу ничего не было найдено.
        </p>
      </div>
    </div>
  );
}
