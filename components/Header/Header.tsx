import styles from "./Header.module.css";
import Logo from "/public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Link from "next/link";
import Search from "../SearchHeader/Search";
import { useMediaQuery } from "react-responsive";
import SearchBtn from "/public/icon/headerIcon/searchBtn.svg";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSearch } from "../../redux/slices/menuSlice";
import SearchMobile from "../SearchMobile/SearchMobile";
import { AppState } from "@/redux/store";
import { useEffect } from "react";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  const isBig = useMediaQuery({ minWidth: 1201 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1200 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 768 });
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.menuSlice.openedSearch);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          <Logo />
        </Link>
        {isBig && (
          <ButtonMenu className={styles.header_button} appearance="primary">
            Каталог
          </ButtonMenu>
        )}
        {isTablet && (
          <ButtonMenu className={styles.header_button} appearance="primary">
            {}
          </ButtonMenu>
        )}
        {isMobile && (
          <ButtonMenu className={styles.header_button} appearance="ghost">
            {}
          </ButtonMenu>
        )}

        <Search className={styles.search}></Search>
        <span
          onClick={() => dispatch(setOpenSearch())}
          className={styles.searchBtn}
        >
          <SearchBtn />
        </span>
        <Navbar className={styles.navbar} />
        <SearchMobile />
      </div>
    </header>
  );
}
