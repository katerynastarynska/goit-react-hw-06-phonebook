import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/ContactsSlice";
import filterReducer from "./filter/FilterSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
