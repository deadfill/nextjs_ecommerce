import { AppState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Help(): JSX.Element {
  const favoriteItems = useSelector(
    (state: AppState) => state.favoriteSlice.favorite
  );
  if (favoriteItems.length === 0) {
    return <div>Вы еще не добавили ни один товар в избранное.</div>;
  }

  const renderFavoriteItems = favoriteItems.map((item, id) => {
    return (
      <li key={id}>
        <div>{item.name}</div>
      </li>
    );
  });

  return (
    <>
      <ul>{renderFavoriteItems}</ul>
    </>
  );
}
