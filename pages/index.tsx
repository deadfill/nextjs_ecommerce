import Product, { IProduct } from "@/models/Product";
import styles from "./Index.module.css";
import ProductItem from "@/components/ProductItem/ProductItem";
import { GetServerSideProps } from "next";
import dbConnect from "../libs/mongodb";
import { useRouter } from "next/router";

export interface IProps {
  data: IProduct[];
  countProducts: number;
  page: number;
  pages: number;
}

const PAGE_SIZE = 1;

export default function Index(props: IProps): JSX.Element {
  const { data, countProducts, pages } = props;
  const router = useRouter();

  const pageHandler = (page: any) => {
    const { query } = router;
    if (page) query.page = page;
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_menu}>
        {data.length === 0 ? "No" : `Найдено товаров ${countProducts}`}
        <p className={styles.menu_description}>
          Наша компания продает продукцию только оптом и по безналичному
          расчету, работает только с юридическими лицами на основании
          заключенных договоров. Цены, указанные на сайте, не являются публичной
          офертой и носят информационный характер. Все цены указаны в рублях с
          учетом НДС.
        </p>
      </div>
      <div>
        <div className={styles.products_list}>
          {data.map((item) => (
            <ProductItem data={item} key={item._id}></ProductItem>
          ))}
        </div>
        <div>
          <ul className={styles.pagination}>
            {data.length > 0 &&
              [...Array(pages).keys()].map((pageNumber: number) => (
                <li key={pageNumber}>
                  <button onClick={() => pageHandler(pageNumber + 1)}>
                    {pageNumber + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pageSize: any = query.pageSize || PAGE_SIZE;
  const page: any = query.page || 1;
  console.log(pageSize);
  await dbConnect();
  const res = await Product.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  const data = JSON.parse(JSON.stringify(res));
  const countProducts = await Product.countDocuments();

  // Pass data to the page via props
  return {
    props: {
      data,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    },
  };
};
