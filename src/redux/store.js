import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactsReducer from "./reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // filter: filterReducer,
})

const enhancer = devToolsEnhancer();
console.log(enhancer)

export const store = createStore(rootReducer, enhancer);
console.log('store', store);
