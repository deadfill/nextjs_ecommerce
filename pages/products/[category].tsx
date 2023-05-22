import ProductItem from "@/components/ProductItem/ProductItem";
import dbConnect from "@/libs/mongodb";
import Product, { IProduct } from "@/models/Product";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const Category = ({ data }: { data: IProduct[] }) => {
  const router = useRouter();

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
  await dbConnect();
  const res = await Product.find().exec();
  const data = JSON.parse(JSON.stringify(res));
  console.log(data);
  const paths = await data.map((item: IProduct) => {
    return {
      params: { category: item.category },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (query) => {
  const { category }: any = query.params;
  await dbConnect();
  const res = await Product.find({
    category: { $regex: category, $options: "i" },
  }).exec();
  const data = JSON.parse(JSON.stringify(res));
  return { props: { data } };
};
