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

export interface Product extends Omit<PrimitiveProduct, "imageUrl">
{
    uid: string;
    activate: boolean;
    descHtml: string;
    imageUrls: string[];
    parameters: string;
    categoryDTO: {
      name: string;
      shortId: string
    }
}
