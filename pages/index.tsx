import News from "@/components/News/News";
import PopularCat from "@/components/PopularCat/PopularCat";
import Slider from "@/components/Slider/Slider";
import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { GetStaticProps } from "next";

export default function Index({ category }: any): JSX.Element {
  return (
    <>
      <Slider />
      <PopularCat category={category} />
      <News />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const category = await Product.distinct("category");

  return { props: { category } };
};
