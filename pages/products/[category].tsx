import ProductItem from "@/components/ProductItem/ProductItem";
import { IProduct } from "@/models/Product";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const Category = ({ data }: { data: IProduct[] }) => {
  const router = useRouter();
  console.log(router);

  return data.map((item) => (
    <>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <ProductItem key={item._id} data={item} />
    </>
  ));
};

export default Category;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/getAllProducts`);
  const data = await res.json();
  const paths = await data.product.map((item: IProduct) => {
    return {
      params: { category: item.category },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { category }: any = ctx.params;
  const res = await fetch(
    `http://localhost:3000/api/category?query=${category}`
  );
  const data = await res.json();
  return { props: { data } };
};
