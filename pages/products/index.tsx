import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Key } from "react";

const Category = ({ category }: any) => {
  return category.map((item: string, index: Key) => (
    <Link
      href={{
        pathname: `/products/${item}`,
      }}
      key={index}
    >
      <div>{item}</div>
    </Link>
  ));
};

export default Category;

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const category = await Product.distinct("category");
  return { props: { category } };
};
