export interface BasketProduct {
  uuid: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  summaryPrice: number;
}

export interface GetBasketResponse {
  BasketProducts: BasketProduct[];
  summaryPrice: number;
}
