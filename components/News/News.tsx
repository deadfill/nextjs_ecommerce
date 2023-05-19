import Htag from "../Htag/Htag";
import { NewsItem, NewsProps } from "./News.props";
import styles from "./News.module.css";
import NewsItems from "../NewsItems/NewsItems";
import clsx from "clsx";
import { useState } from "react";

const newsItem: NewsItem[] = [
  {
    name: "Заголовок в две строчки или в три строчки (третья строчка)",
    icon: "/icon/newsIcon.jpg",
    path: "/",
    date: "26.03.2023",
  },
  {
    name: "Заголовок в две строчки или в три строчки (третья строчка)",
    icon: "/icon/newsIcon.jpg",
    path: "/",
    date: "26.03.2023",
  },
  {
    name: "Заголовок в две строчки или в три строчки (третья строчка)",
    icon: "/icon/newsIcon.jpg",
    path: "/",
    date: "26.03.2023",
  },
];

export default function News({ ...props }: NewsProps): JSX.Element {
  const [active, setActive] = useState<boolean>(true);
  return (
    <section>
      <Htag tag="h2">Новости</Htag>
      <div className={styles.wrapper} {...props}>
        {newsItem.map(({ name, icon, path, date }, id) => {
          return (
            <NewsItems
              key={id}
              name={name}
              icon={icon}
              path={path}
              date={date}
            />
          );
        })}
      </div>
      <div className={styles.dotSpan}>
        <span
          className={clsx(styles.dot, {
            [styles.dotActive]: active,
          })}
        ></span>
        <span onClick={() => console.log("sgf")} className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </section>
  );
}
