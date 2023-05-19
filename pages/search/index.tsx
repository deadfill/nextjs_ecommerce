import { GetServerSideProps } from "next";

import { IProduct } from "@/models/Product";
import ProductItem from "@/components/ProductItem/ProductItem";

export const getServerSideProps: GetServerSideProps<{
  data: IProduct[];
}> = async (context) => {
  const param = context.query.q;
  const res = await fetch(`http://localhost:3000/api/search?q=${param}`);
  const data: IProduct[] = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Search({ data }: { data: IProduct[] }): JSX.Element {
  const render = data.map((item) => {
    return <ProductItem key={item._id} data={item}></ProductItem>;
  });
  return <div>{data.length == 0 ? <div>Ничего не найдено</div> : render}</div>;
}
