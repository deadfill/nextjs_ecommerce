import Htag from "../Htag/Htag";
import PopularCatItem from "../PopularCatItem/PopularCatItem";
import { PopularCatProps, PopularCatItemProps } from "./PopularCat.props";
import styles from "./PopularCat.module.css";

const popularCatItems: PopularCatItemProps[] = [
  {
    name: "Стартеры и комплектующие",
    icon: "/icon/conectors.svg",
    path: "/",
  },
  {
    name: "Термостаты",
    icon: "/icon/termostats.svg",
    path: "/",
  },
  {
    name: "Датчики и комбинации приборов",
    icon: "/icon/conectors.svg",
    path: "/",
  },
  {
    name: "Генераторы",
    icon: "/icon/generators.svg",
    path: "/",
  },
  {
    name: "Светотехника",
    icon: "/icon/lamps.svg",
    path: "/",
  },
  {
    name: "Электродвигатели отопителя",
    icon: "/icon/conectors.svg",
    path: "/",
  },
];

export default function PopularCat({ ...props }: PopularCatProps): JSX.Element {
  return (
    <section>
      <Htag tag="h2">Популярные категории</Htag>
      <div className={styles.wrapper} {...props}>
        {popularCatItems.map(({ icon, name, path }, id) => {
          return (
            <PopularCatItem key={id} name={name} icon={icon} path={path} />
          );
        })}
      </div>
    </section>
  );
}
