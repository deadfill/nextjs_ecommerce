import { IProduct } from "@/models/Product";
import { GetStaticProps } from "next";
import Link from "next/link";

const Category = ({ data }: { data: IProduct[] }) => {
  return data.map((item) => (
    <Link
      href={{
        pathname: `/products/${item.category}`,
      }}
      key={item._id}
    >
      <div>{item.category}</div>
    </Link>
  ));
};

export default Category;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/getAllProducts`);
  const data = await res.json();
  return { props: { data: data.product } };
};
