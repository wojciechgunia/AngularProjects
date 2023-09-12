export interface PrimitiveProduct
{
  name: string;
  price: number;
  createAt: string;
  imageUrl: string;
  mainDesc: string;
}

export interface GetProductResponse
{
  products: PrimitiveProduct[];
  totalCount: number;
}
