import FavoriteItem from "@/components/FavoriteItem/FavoriteItem";
import NotFavoriteItem from "@/components/NotFavoriteItem/NotFavoriteItem";
import { AppState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.css";

export default function Help(): JSX.Element {
  const favoriteItems = useSelector(
    (state: AppState) => state.favoriteSlice.favorite
  );
  if (favoriteItems.length === 0) {
    return <NotFavoriteItem />;
  }

  const render = favoriteItems.map((item, id) => {
    return <FavoriteItem data={item} />;
  });

  return (
    <>
      <h2 className={styles.cart_htag}>Избранное</h2>
      <div className={styles.index_wrapper}>{render}</div>
    </>
  );
}
