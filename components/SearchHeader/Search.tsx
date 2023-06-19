import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { clsx } from "clsx";

import { setClose } from "@/redux/slices/menuSlice";

export default function Search({
  className,
  ...props
}: SearchProps): JSX.Element {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setQuery(""), [dynamicRoute]);

  const openSearch = () => {
    dispatch(setClose());
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/search?q=${query}`);
  };
  return (
    <>
      <div className={clsx(styles.wrapper, className)}>
        <form onSubmit={onSearch}>
          <input
            required
            value={query}
            {...props}
            className={styles.search_input}
            placeholder="Я ищу"
            onClick={() => openSearch()}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>
      </div>
    </>
  );
}
