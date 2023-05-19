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

const PAGE_SIZE = 4;

export default function Index(props: IProps): JSX.Element {
  const { data, countProducts, pages } = props;
  const router = useRouter();

  const { sort = "featured", page = 1 } = router.query;

  const filterSearch = ({ page, sort }: any) => {
    const { query } = router;
    if (page) query.page = page;
    if (sort) query.sort = sort;

    console.log(query.sort);

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const pageHandler = (page: any) => {
    filterSearch({ page });
  };

  const sortHandler = (e: any) => {
    filterSearch({ sort: e.target.value });
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
        <div>
          Сортировка{" "}
          <select value={sort} onChange={sortHandler}>
            <option value="newest">Сначало новые</option>
            <option value="lowest">Сначало дешевые</option>
            <option value="highest">Сначало дорогие</option>
            <option value="toprated">По рейтингу</option>
          </select>
        </div>
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
  const sort = query.sort || "";
  const order: any =
    sort === "lowest"
      ? { price: 1 }
      : sort === "highest"
      ? { price: -1 }
      : sort === "toprated"
      ? { vote_average: -1 }
      : sort === "newest"
      ? { createdAt: -1 }
      : { _id: -1 };
  console.log(order);
  await dbConnect();
  const res = await Product.find()
    .sort(order)
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
