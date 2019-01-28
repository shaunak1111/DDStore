import {
  ADD_PRODUCT_TO_CART,
  DATA_PRODUCTS_REQUESTED,
  DELETE_PRODUCT_FROM_CART,
  VOUCHER_APPLIED
} from '../../common/constants/actionType';
import { CART_CLICKED } from '../../common/constants/general';

export function addProductsToCart(payload) {
  return { type: ADD_PRODUCT_TO_CART, payload };
}

export function deleteFromCart(payload) {
  return { type: DELETE_PRODUCT_FROM_CART, payload };
}

export function getProducts() {
  return { type: DATA_PRODUCTS_REQUESTED };
}

export function updateCartClicked() {
  return { type: CART_CLICKED };
}

export function updateCartTotalPrice(payload) {
  return { type: VOUCHER_APPLIED, payload };
}
