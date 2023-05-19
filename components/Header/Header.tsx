import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Link from "next/link";
import Search from "../SearchHeader/Search";
import { useMediaQuery } from "react-responsive";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  const isBig = useMediaQuery({ minWidth: 1201 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1200 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 576 });
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

        {/* <Search className={styles.search}></Search> */}
        <Navbar className={styles.navbar} />
      </div>
    </header>
  );
}
