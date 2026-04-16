import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
//import { categoryApi } from "./features/category/categoryApi";
//import { subCategoryApi } from "./features/subCategory/subCategoryApi";
//import { productApi } from "./features/products/productApi";
//import filtersReducer from "./features/products/filterSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,

    // filters: filtersReducer,
    // [categoryApi.reducerPath]: categoryApi.reducer,
    // [subCategoryApi.reducerPath]: subCategoryApi.reducer,
    // [productApi.reducerPath]: productApi.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(categoryApi.middleware)
//       .concat(subCategoryApi.middleware)
//       .concat(productApi.middleware),
});
setupListeners(store.dispatch);
