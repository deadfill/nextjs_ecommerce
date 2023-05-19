import connectMongo from '../../libs/mongodb';
import Product from '../../models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function addProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    const product = await Product.find();
    console.log('FIND ALL PRODUCT');

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}