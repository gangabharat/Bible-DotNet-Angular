import { Action } from "@ngrx/store";
import { Product } from "../product.model";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCTS = "ADD_PRODUCTS";

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddProducts implements Action {
  readonly type = ADD_PRODUCTS;
  constructor(public payload: Product[]) {}
}

export type ProductActions = AddProduct | AddProducts;
