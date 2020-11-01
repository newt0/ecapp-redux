import { createStore as reduxCreateStore, combineReducers } from "redux";
// import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

export function createStore() {
  return reduxCreateStore(
    combineReducers({
      // products: ProductsReducer,
      users: UsersReducer,
    })
  );
}
