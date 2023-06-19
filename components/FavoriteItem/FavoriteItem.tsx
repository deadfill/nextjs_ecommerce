import { useEffect, useState } from "react";
import styles from "./FavoriteItem.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decrement,
  deleteProduct,
  increment,
} from "@/redux/slices/cartSlice";
import { toogleFav } from "@/redux/slices/favoriteSlice";
import CartIcon from "../../public/icon/productIcon/cartIcon.svg";
import FavoriteIcon from "../../public/icon/productIcon/favoriteIcon.svg";
import FavoriteIconActiv from "../../public/icon/productIcon/favoritIconActiv.svg";
import IncrIcon from "../../public/icon/productIcon/incr.svg";
import DecrIcon from "../../public/icon/productIcon/decr.svg";
import { AppState } from "@/redux/store";
import ProductSvg from "../../public/productImage.jpg";

export default function FavoriteItem({ data }: { data: any }) {
  const favItems = useSelector(
    (state: AppState) => state.favoriteSlice.favorite
  );
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);
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
    const items = cartItems.find((item) => item.id === data.id);
    if (items) {
      setCount(items.count);
      setCart(true);
    }
  }, [data.id]);

  useEffect(() => {
    const items = favItems.find((item) => item.id === data.id);
    if (items) {
      setFav(true);
    }
  }, [data.id]);

  const addCart = () => {
    setCart(true);
    setCount((count) => count + 1);
    dispatch(increment());
    dispatch(addProduct(cartItem));
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

  const sliceDescr = (string: string, slice: number) =>
    string.length > slice ? string.slice(0, slice).trim() + "..." : string;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_image}>
        <Image
          className={styles.card_image}
          src={ProductSvg}
          alt={""}
          fill
          priority
        />
        <button
          onClick={() => toogleFavs(data)}
          className={styles.button_favorite}
        >
          {fav ? (
            <FavoriteIconActiv className={styles.favoriteIcon} />
          ) : (
            <FavoriteIcon className={styles.favoriteIcon} />
          )}
        </button>
      </div>
      <div className={styles.product_price}>{data.price} &#8381;</div>
      <div className={styles.product_name}>
        {data.name[0].toUpperCase() + data.name.slice(1)}
      </div>
      <div>{sliceDescr(data.descriptions, 70)}</div>
      <div className={styles.product_category}>
        <div className={styles.product_category_brend}>Категория:</div>
        <div className={styles.product_category_name}>
          {data.category[0].toUpperCase() + data.category.slice(1)}
        </div>
      </div>
      {cart ? (
        <div className={styles.product_cart_wrapper}>
          <button className={styles.button_cart_wrapper} onClick={decr}>
            <DecrIcon />
          </button>
          <div>{count}</div>
          <button className={styles.button_cart_wrapper} onClick={incr}>
            <IncrIcon />
          </button>
        </div>
      ) : (
        <button className={styles.button_cart} onClick={addCart}>
          <CartIcon />В корзину
        </button>
      )}
    </div>
  );
}
