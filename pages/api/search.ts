import Product from '@/models/Product';
import connectMongo from '../../libs/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const queryParams = query.q;
  console.log(queryParams);
  try {
    await connectMongo();
    const product = await Product.find({name: { $regex: queryParams, $options: 'i' }}).exec();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}