import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { GetStaticProps } from "next";
import styles from "./Catalog.module.css";
import CategoryItem from "@/components/CategoryItem/CategoryItem";

export default function Catalog({ category }: any): JSX.Element {
  const render = category.map((item: any, index: number) => {
    return (
      <CategoryItem
        key={index}
        name={item}
        icon={"/icon/conectors.svg"}
        path={`products/${item}`}
      ></CategoryItem>
    );
  });
  return <div className={styles.wrapper}>{render}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const category = await Product.distinct("category");

  return { props: { category } };
};
