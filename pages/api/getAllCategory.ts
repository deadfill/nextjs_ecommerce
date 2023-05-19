import Product from '@/models/Product';
import connectMongo from '../../libs/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const product = await Product.find().exec();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}