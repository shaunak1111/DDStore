import {
  ADD_PRODUCT,
  DATA_PRODUCTS_LOADED,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  VOUCHER_APPLIED
} from '../../common/constants/actionType';
import { CART_CLICKED } from '../../common/constants/general';

const initialState = {
  Products: [],
  CartProducts: [],
  cartClicked: false,
  cartTotal: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const index = state.Products.findIndex((product) => product.id === action.payload.id);
      return {
        ...state,
        Products: [
          ...state.Products.slice(0, index),
          { ...state.Products[index], stock: state.Products[index].stock - 1 },
          ...state.Products.slice(index + 1)
        ],
        CartProducts: [...state.CartProducts, action.payload],
        cartTotal: state.cartTotal + action.payload.discountedPrice
      };
    }
    case DATA_PRODUCTS_LOADED:
      return {
        ...state,
        Products: [...state.Products, ...action.payload.products]
      };
    case DELETE_PRODUCT_FROM_CART: {
      const index = state.CartProducts.findIndex((product) => product.id === action.payload.id);
      const productIndex = state.Products.findIndex((product) => product.id === action.payload.id);
      return {
        ...state,
        Products: [
          ...state.Products.slice(0, productIndex),
          { ...state.Products[productIndex], stock: state.Products[productIndex].stock + 1 },
          ...state.Products.slice(productIndex + 1)
        ],
        CartProducts: [
          ...state.CartProducts.slice(0, index),
          ...state.CartProducts.slice(index + 1)
        ],
        cartTotal: state.cartTotal - action.payload.discountedPrice
      };
    }
    case CART_CLICKED:
      return { ...state, cartClicked: !state.cartClicked };
    case VOUCHER_APPLIED:
      return { ...state, cartTotal: action.payload.cartTotal };
    default:
      return state;
  }
}

export default rootReducer;
