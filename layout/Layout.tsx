import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import MobileNav from "@/components/MobileNav/MobileNav";
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.body}>{children}</main>
      <MobileNav></MobileNav>
    </div>
  );
}
