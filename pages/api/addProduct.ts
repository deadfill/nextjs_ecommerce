import connectMongo from '../../libs/mongodb';
import Product from '../../models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function addProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Подключение к базе данных');
    await connectMongo();
    console.log('Успешное подключение');

    console.log('Создание документа');
    const product = await Product.create(req.body);
    console.log('Успешное создание');

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}