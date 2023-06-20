import { IProduct } from "@/models/Product";
import styles from "./Admin.module.css";

interface IProducts {
  data: IProduct[];
}

export default function Help({ data }: IProducts): JSX.Element {
  const renderItem = data.map((item, id) => {
    const handleDelete = async () => {
      try {
        await fetch(`/api/deleteProduct?id=${item._id}`, {
          method: "Delete",
        });
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <li key={id}>
        <div>{item.name}</div>
        <div>{item._id}</div>
        <button onClick={() => handleDelete()}>delete</button>
      </li>
    );
  });
  return (
    <div>
      <ul className={styles.wrapper}>{renderItem}</ul>;
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/getAllProducts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data.product } };
}
