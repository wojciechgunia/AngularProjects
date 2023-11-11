import { ServerResponse } from "./server-response.model";

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

export interface PostBasketBody {
  product: string;
  quantity: number;

}

export interface BasketResponse {
  body: ServerResponse | GetBasketResponse;
  totalCount: number;
}
