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

export interface Product
{
    uid: string;
    name: string;
    price: number;
    createAt: string;
    mainDesc: string;
    activate: boolean;
    descHtml: string;
    imageUrls: string[];
    parameters: string;
    categoryDTO: {
      name: string;
      shortId: string
    }
}
