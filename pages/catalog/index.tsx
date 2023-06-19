import PopularCatItem from "@/components/PopularCatItem/PopularCatItem";
import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { GetStaticProps } from "next";
import styles from "./Catalog.module.css";

export default function Catalog({ category }: any): JSX.Element {
  const render = category.map((item: any, index: number) => {
    return (
      <PopularCatItem
        key={index}
        name={item}
        icon={"/icon/conectors.svg"}
        path={`products/${item}`}
      ></PopularCatItem>
    );
  });
  return <div className={styles.wrapper}>{render}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const category = await Product.distinct("category");

  return { props: { category } };
};
