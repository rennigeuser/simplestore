import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productModel } from "@entities/product";
import { basketModel } from "@entities/basket";

const { productReducer } = productModel.productSlice;
const { basketReducer } = basketModel.basketSlice;

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
