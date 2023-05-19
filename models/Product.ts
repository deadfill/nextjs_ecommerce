import { Schema, model, models } from 'mongoose';

export interface IProduct {
  _id: number;
  name: string;
  count: string;
  price: number;
  country: string;
  descriptions: string;
  category: string;
  vote_average: number;
  image_url: string;
  catalogue_number: string;
  code: string;
  barcode: string;
}

const productSchema = new Schema<IProduct>({
  name: String,
  count: String,
  price: Number,
  country: String,
  descriptions: String,
  category: String,
  vote_average: Number,
  image_url: String,
  catalogue_number: String,
  code: String,
  barcode: String
},
  { timestamps: true }
);

const Product = models.Product|| model<IProduct>('Product', productSchema);

export default Product;