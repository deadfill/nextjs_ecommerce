import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export default function Footer({ ...props }: FooterProps): JSX.Element {
  return (
    <footer {...props}>
      <div className={styles.wrapper}>footer</div>
    </footer>
  );
}
