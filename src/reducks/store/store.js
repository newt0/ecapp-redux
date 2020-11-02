import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
// import { ProductsReducer } from "../products/reducers";
import thunk from "redux-thunk"
import { UsersReducer } from "../users/reducers";

export function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      // products: ProductsReducer,
      users: UsersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
}
