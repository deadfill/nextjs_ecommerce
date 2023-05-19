import { useEffect, useState } from "react";
import styles from "./ProductItem.module.css";
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
import { IProduct } from "@/models/Product";

export default function Hit({ data }: { data: IProduct }) {
  const [cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state: AppState) => state.cartSlice.cart);
  const favItems = useSelector(
    (state: AppState) => state.favoriteSlice.favorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.find((item) => item.id === data._id);
    if (items) {
      setCount(items.count);
      setCart(true);
    }
  }, [data._id]);

  useEffect(() => {
    const items = favItems.find((item) => item.id === data._id);
    if (items) {
      setFav(true);
    }
  }, [data._id]);

  const cartItem = {
    id: data._id,
    name: data.name,
    descriptions: data.descriptions,
    price: data.price,
    category: data.category,
    count: 1,
  };

  const favItem = {
    id: data._id,
    name: data.name,
    descriptions: data.descriptions,
    price: data.price,
    category: data.category,
    count: 1,
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

  const addCart = () => {
    setCart(true);
    setCount((count) => count + 1);
    dispatch(increment());
    dispatch(addProduct(cartItem));
  };

  const addFavorite = () => {
    setFav((fav) => !fav);
    dispatch(toogleFav(favItem));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_image}>
          <Image
            className={styles.card_image}
            src={data.image_url}
            alt={""}
            fill
            priority
          />
          <button className={styles.button_favorite} onClick={addFavorite}>
            {fav ? (
              <FavoriteIconActiv className={styles.favoriteIcon} />
            ) : (
              <FavoriteIcon className={styles.favoriteIcon} />
            )}
          </button>
        </div>
        <div className={styles.product_price}>{data.price} &#8381;</div>
        <div>{data.descriptions}</div>
        <div className={styles.product_name}>
          {data.name[0].toUpperCase() + data.name.slice(1)}
        </div>
        <div className={styles.product_category}>
          <div className={styles.product_category_brend}>Категория:</div>
          <div className={styles.product_category_name}>
            {data.category[0].toUpperCase() + data.category.slice(1)}
          </div>
        </div>
        {cart ? (
          <div className={styles.product_cart_wrapper}>
            <button className={styles.button_cart_wrapper} onClick={decr}>
              <DecrIcon className={styles.decrIcon} />
            </button>
            <div>{count}</div>
            <button className={styles.button_cart_wrapper} onClick={incr}>
              <IncrIcon className={styles.incrIcon} />
            </button>
          </div>
        ) : (
          <button className={styles.button_cart} onClick={addCart}>
            <CartIcon />В корзину
          </button>
        )}
      </div>
    </>
  );
}
