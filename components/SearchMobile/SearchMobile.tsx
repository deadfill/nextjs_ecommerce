import { SearchMobileProps } from "./SearchMobile.props";
import styles from "./SearchMobile.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import CloseSearch from "/public/icon//catalogIcon/closeCatalog.svg";
import { setCloseSearch } from "@/redux/slices/menuSlice";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SearchMobile({
  ...props
}: SearchMobileProps): JSX.Element {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.menuSlice.openedSearch);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setQuery(""), [dynamicRoute]);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setQuery("");
    dispatch(setCloseSearch());
    router.push(`/search?q=${query}`);
  };

  return (
    <div
      className={clsx(styles.searchMenu, {
        [styles.menuShow]: open,
      })}
      {...props}
    >
      <span
        className={styles.closeBtn}
        onClick={() => dispatch(setCloseSearch())}
      >
        <CloseSearch />
      </span>
      <form className={styles.formSearch} onSubmit={onSearch}>
        <input
          required
          value={query}
          className={styles.searchInput}
          placeholder="Поиск значения"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className={styles.searchBtn} onSubmit={onSearch}>
          Применить
        </button>
      </form>
    </div>
  );
}
