import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { AppState } from "@/redux/store";
import {
  addProduct,
  decrement,
  increment,
  deleteAllProduct,
  deleteProduct,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import ProductSvg from "../../public/productImage.jpg";
import IncrIcon from "../../public/icon/productIcon/incr.svg";
import DecrIcon from "../../public/icon/productIcon/decr.svg";
import DelIcon from "../../public/icon/productIcon/delIcon.svg";
import FavoriteIcon from "../../public/icon/productIcon/favoriteIcon.svg";
import { toogleFav } from "@/redux/slices/favoriteSlice";
import { useEffect, useState } from "react";
import FavoriteIconActiv from "../../public/icon/productIcon/favoritIconActiv.svg";

export default function CartItem({ data }: { data: any }): JSX.Element {
  console.log(data);
  const favItems = useSelector(
    (state: AppState) => state.favoriteSlice.favorite
  );
  const [cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const cartItem = {
    id: data.id,
    name: data.name,
    descriptions: data.descriptions,
    price: data.price,
    category: data.category,
    count: 1,
  };

  useEffect(() => {
    const items = favItems.find((item) => item.id === data.id);
    if (items) {
      setFav(true);
    }
  }, [data.id]);

  const deleteCartItem = (item: any) => {
    dispatch(deleteAllProduct(item));
  };

  const toogleFavs = (item: any) => {
    setFav((fav) => !fav);
    dispatch(toogleFav(item));
  };

  const incr = () => {
    dispatch(increment());
    setCount((count) => count + 1);
    dispatch(addProduct(cartItem));
  };

  const decr = () => {
    if (count <= 1) {
      setCart(false);
      dispatch(decrement());
      dispatch(deleteProduct(cartItem));
      setCount(0);
      return;
    }
    dispatch(decrement());
    dispatch(deleteProduct(cartItem));
    setCount((count) => count - 1);
  };

  return (
    <li key={data.id} className={styles.cart_item}>
      <div className={styles.wrapper_name}>
        <Image
          src={ProductSvg}
          alt={""}
          className={styles.cart_image}
          height={83}
          width={83}
          priority
        />
        <div className={styles.name}>{data.name}</div>
      </div>
      <div className={styles.product_category}>
        <div className={styles.product_category_brend}>Категория:</div>
        <div className={styles.product_category_name}>
          {data.category[0].toUpperCase() + data.category.slice(1)}
        </div>
      </div>
      <div className={styles.wrapper_price}>
        <div className={styles.flex_box}>
          <div>Цена 1 шт.</div>
          <div>{data.price}</div>
        </div>
        <div className={styles.product_counter}>
          <button onClick={decr} className={styles.button_cart_wrapper}>
            <DecrIcon className={styles.decrIcon} />
          </button>
          <div className={styles.counter}>{data.count}</div>
          <button onClick={incr} className={styles.button_cart_wrapper}>
            <IncrIcon className={styles.incrIcon} />
          </button>
        </div>
        <div className={styles.flex_box}>
          <div>Итого</div>
          <div>123</div>
        </div>
        <div className={styles.flex_button}>
          <button
            onClick={() => toogleFavs(data)}
            className={styles.favorite_icon}
          >
            {fav ? (
              <FavoriteIconActiv className={styles.favoriteIcon} />
            ) : (
              <FavoriteIcon className={styles.favoriteIcon} />
            )}
          </button>
          <button
            onClick={() => deleteCartItem(data)}
            className={styles.del_icon}
          >
            <DelIcon />
          </button>
        </div>
      </div>
    </li>
  );
}
