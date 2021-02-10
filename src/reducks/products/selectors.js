import { createSelector } from "reselect";

const ProductsSelector = (state) => state.products;

export const getProducts = createSelector(
  [ProductsSelector],
  (state) => state.list
);
