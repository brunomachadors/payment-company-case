import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardReducer from "./card/card";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  selectedCard: cardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
