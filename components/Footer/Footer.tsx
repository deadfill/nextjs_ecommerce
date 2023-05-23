import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import FooterLogo from "../FooterLogo/FooterLogo";
import FooterNav from "../FooterNav/FooterNav";
import FooterInfo from "../FooterInfo/FooterInfo";

export default function Footer({ ...props }: FooterProps): JSX.Element {
  return (
    <footer {...props}>
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <FooterLogo />
          <FooterNav />
          <FooterInfo />
        </div>
      </div>
    </footer>
  );
}
