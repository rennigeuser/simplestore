import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Product } from "./models";
import { products } from "./mocks";

type State = {
  products: typeof products;
  filteredProducts: typeof products;
};

const initialState: State = {
  products,
  filteredProducts: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products.push(...action.payload);
    },

    setFiltered: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
    // removeProduct: (state, action: PayloadAction<Product["id"]>) => {
    //   return state./filter((product) => product.id !== action.payload);
    // },
    // removeProducts: (state, action: PayloadAction<Product["id"][]>) => {
    //   return state.filter((product) => !action.payload.includes(product.id));
    // },
  },
});

// const { addProduct, addProducts, removeProduct, removeProducts } =
//   productSlice.actions;

const { addProduct, addProducts, setFiltered } = productSlice.actions;

export const reducers = {
  addProduct,
  addProducts,
  setFiltered,
};

const selectProducts = (state: RootState) => state.product.products;

const selectProduct = (slug: Product["slug"]) => (state: RootState) =>
  state.product.products.find((product) => product.slug === slug);

const selectFilteredProducts = (state: RootState) =>
  state.product.filteredProducts;

export const selectors = {
  selectProducts,
  selectProduct,
  selectFilteredProducts,
};

export const productReducer = productSlice.reducer;
