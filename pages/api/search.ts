import Product from '@/models/Product';
import connectMongo from '../../libs/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export default async function handle(req: NextApiRequest) {
  const { query } = req;
  const queryParams = query.q as string;
  try {
    await connectMongo();
    const product = await Product.find({ $text : { $search : queryParams }});
    // const product = await Product.find({name: { $regex: queryParams, $options: 'i' }}).exec();
    return NextResponse.json({ product });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}