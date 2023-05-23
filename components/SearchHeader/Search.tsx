import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { setClose } from "@/redux/slices/menuSlice";

export default function Search({ ...props }: SearchProps): JSX.Element {
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
    // setOpened(false);
    setQuery("");
    router.push(`/search?q=${query}`);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={onSearch}>
          <input
            required
            value={query}
            // className={clsx(styles.seacrhInput, {
            //   [styles.seacrhInputShow]: true,
            // })}
            {...props}
            placeholder="Я ищу"
            onClick={() => openSearch()}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>

        <div
        // onClick={() => setOpened(false)}
        // className={clsx(styles.cover, {
        //   [styles.coverShow]: opened,
        // })}
        />
        {/* <div
          className={clsx(styles.serchModal, {
            [styles.serchModalShow]: opened,
          })}
        ></div> */}
      </div>
    </>
  );
}
