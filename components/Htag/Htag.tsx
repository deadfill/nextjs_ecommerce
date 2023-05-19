import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export default function Htag({
  tag,
  children,
  ...props
}: HtagProps): JSX.Element {
  return (
    <>
      {tag === "h1" && (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      )}
      {tag === "h2" && (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      )}
      {tag === "h3" && (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      )}
    </>
  );
}
