import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productModel } from "@entities/product";

type Product = productModel.productModels.Product;

type State = {
  products: Product[];
};

const initialState: State = { products: [] };

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products.splice(state.products.indexOf(action.payload), 1);
    },
  },
});

const { addProduct, removeProduct } = basketSlice.actions;

export const reducers = {
  addProduct,
  removeProduct,
};

const selectProducts = (state: RootState) => state.basket.products;

export const selectors = {
  selectProducts,
};

export const basketReducer = basketSlice.reducer;
