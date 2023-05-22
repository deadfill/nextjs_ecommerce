import { GetServerSideProps } from "next";
import Product, { IProduct } from "@/models/Product";
import ProductItem from "@/components/ProductItem/ProductItem";
import dbConnect from "@/libs/mongodb";

export default function Search({ data }: { data: IProduct[] }): JSX.Element {
  if (!data) {
    return <div>loading</div>;
  }
  const render = data.map((item) => {
    return <ProductItem key={item._id} data={item}></ProductItem>;
  });
  return <div>{data.length == 0 ? <div>Ничего не найдено</div> : render}</div>;
}

export const getServerSideProps: GetServerSideProps<{
  data: IProduct[];
}> = async (context) => {
  const param = context.query.q as string;
  await dbConnect();
  const res = await Product.find({ $text: { $search: param } });
  const data = JSON.parse(JSON.stringify(res));

  return {
    props: {
      data: data,
    },
  };
};
