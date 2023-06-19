import { GetServerSideProps } from "next";
import Product, { IProduct } from "@/models/Product";
import ProductItem from "@/components/ProductItem/ProductItem";
import dbConnect from "@/libs/mongodb";
import NothingFind from "@/components/NothingFind/NothingFind";
import styles from "./Search.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const PAGE_SIZE = 8;

export interface IProps {
  data: IProduct[];
  countProducts: number;
  page: number;
  pages: number;
}

export default function Search(props: IProps): JSX.Element {
  const { data, countProducts, pages } = props;
  const [sort, setSort] = useState<string>("lowest");
  const router = useRouter();

  console.log(countProducts);

  const filterSearch = ({ page, sort }: any) => {
    const { query } = router;
    if (page) query.page = page;
    if (sort) query.sort = sort;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const pageHandler = (page: any) => {
    filterSearch({ page });
  };

  const sortHandler = () => {
    if (sort == "lowest") {
      setSort("highest");
      filterSearch({ sort });
    } else {
      setSort("lowest");
      filterSearch({ sort });
    }
  };

  if (data.length === 0) {
    return <NothingFind />;
  }

  return (
    <>
      <div className={styles.button_sort}>
        <button onClick={() => sortHandler()}>По цене</button>
        <button>По названию</button>
        <button>По рейтингу</button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_menu}>
          <button type="button" onClick={() => router.back()}>
            Click here to go back
          </button>
          {data.length === 0 ? "No" : `Найдено товаров ${countProducts}`}

          <p className={styles.menu_description}>
            Наша компания продает продукцию только оптом и по безналичному
            расчету, работает только с юридическими лицами на основании
            заключенных договоров. Цены, указанные на сайте, не являются
            публичной офертой и носят информационный характер. Все цены указаны
            в рублях с учетом НДС.
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: IProduct[];
}> = async ({ query }) => {
  const pageSize: any = query.pageSize || PAGE_SIZE;
  const page: any = query.page || 1;
  const sort = query.sort || "";
  const category = query.category;
  console.log(category);
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
  const param = query.q as string;
  await dbConnect();
  const res = await Product.find({ $text: { $search: param } })
    .sort(order)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  const data = JSON.parse(JSON.stringify(res));
  const countProducts = await Product.countDocuments({
    $text: { $search: param },
  });
  console.log(countProducts);
  return {
    props: {
      data,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    },
  };
};
